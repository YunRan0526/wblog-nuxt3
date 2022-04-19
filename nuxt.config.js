import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildDir: 'nuxt-build',
    runtimeConfig: {
        public: {
            NODE_ENV: process.env.NODE_ENV,
        }
    },
    vite: {
        build: { assetsInlineLimit: 0 },
    },
    alias: {
        '@assets': resolve(__dirname, './assets')
    },
    head: {
        meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    css: [
        '@/config/styles/animation.scss',
        '@/config/styles/main.scss'
    ]
})
