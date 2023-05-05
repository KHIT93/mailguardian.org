import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt'
    ],
    content: {
        highlight: {
            theme: 'dracula'
        }
    }
})
