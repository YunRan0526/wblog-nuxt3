import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildDir: 'nuxt-build',
    alias: {
        '@assets': resolve(__dirname, './assets')
    },
    buildAssetsDir: "",
    head: {
        "charset": "utf-8",
        "viewport": "width=device-width, initial-scale=1",
        "meta": [],
        "link": [],
        "style": [],
        "script": []
    },
    css: [
        '@/config/styles/animation.scss',
        '@/config/styles/main.scss'
    ]
})
