import { createGtm } from "@gtm-support/vue-gtm"

export default defineNuxtPlugin((nuxtApp) => {
    const gtm = createGtm({
        id: "GTM-XXXXXXXX",
    })

    nuxtApp.vueApp.use(gtm)
})
