// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ja',
            },
            script: [{
                src: 'https://platform.twitter.com/widgets.js',
                async: true,
            }],
            link: [{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            }],
        },
    },
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
    build: {
        transpile: ['vuetify'],
    },
    components: {
        global: true,
        dirs: ['~/components'],
    },
    runtimeConfig: {
        public: {
            nodeEnv: process.env.NODE_ENV || 'production',
            baseUrl: process.env.NUXT_BASE_URL || 'https://bousai.kerokero.jp/',
            gMapApiKey: process.env.GMAP_API_KEY || '',
            sheetUrl: process.env.SHEET_URL || '',
        },
    },
})
