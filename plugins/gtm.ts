import { createGtm } from "@gtm-support/vue-gtm"

export default defineNuxtPlugin((nuxtApp) => {
    const gtm = createGtm({
        id: "GTM-WHMH3RGS",
    })

    nuxtApp.vueApp.use(gtm)
})
