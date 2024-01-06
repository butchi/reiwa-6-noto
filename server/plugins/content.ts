import { JSDOM } from 'jsdom'

import crypto from 'crypto'
import { Agent } from 'undici'

export default defineNitroPlugin(async (nitroApp) => {
    nitroApp.hooks.hook('content:file:afterParse', async (file: { _id: string; body: any }) => {
        if (file._id === 'content:sheet.csv') {
            // https://stackoverflow.com/questions/76670346/node-js-18-16-1-fetcherror-unsafe-legacy-renegotiation
            // for www.pref.ishikawa.lg.jp
            const fetchPage = (url: string) => fetch(url, {
                dispatcher: new Agent({
                    connect: {
                        rejectUnauthorized: false,
                        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
                    },
                }),
            })

            const arr = file.body.filter(item => item.desc.startsWith('/'))

            await Promise.all(arr.map(async item => {
                try {
                    const xPath = item.desc

                    const resPre = await fetchPage(item.url)
    
                    const htmlPreTxt = await resPre.text()
    
                    const domPre = new JSDOM(htmlPreTxt.replace(/<style(\s|>).*?<\/style>/gi, ''))
    
                    const format =
                        domPre.window.document.querySelector('meta[charset]')?.getAttribute('charset') ??
                        domPre.window.document
                            .querySelector('meta[http-equiv="Content-Type"]')
                            ?.getAttribute('content')
                            ?.match(/charset=([0-9a-zA-Z_-]+)/)?.[1]
                            ?.replace('_', '-')
    
                    const res = await fetchPage(item.url)
    
                    const buffer = await res.arrayBuffer()
    
                    const htmlTxt = new TextDecoder(format).decode(buffer)
    
                    const dom = new JSDOM(htmlTxt.replace(/<style(\s|>).*?<\/style>/gi, ''))
    
                    const doc = dom.window.document
    
                    const desc = doc.evaluate(xPath, doc, null, 2, null).stringValue
    
                    item.desc = desc
                    
                    console.info('fetch:', item.url)
    
                    const ret = desc
    
                    return ret
                } catch (error) {
                    console.log(error)
                    console.log('fail:', item.url)
                }
            }))
        }
    })
})
