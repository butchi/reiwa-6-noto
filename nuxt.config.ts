// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ja',
            },
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
    modules: ['@nuxt/content'],
    runtimeConfig: {
        public: {
            nodeEnv: process?.env?.NODE_ENV || 'production',
            baseUrl: process?.env?.NUXT_BASE_URL || 'https://butchi.github.io/reiwa-6-noto/',
        },
    },
})
