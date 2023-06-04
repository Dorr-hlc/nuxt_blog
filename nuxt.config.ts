// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
    srcDir: 'src/', //指定app.vue 和pages目录都放在src目录下
    modules: [
        '@nuxt/content'
    ],
    content: {
        highlight: {
            preload: [
                'javascript',
                'typescript',
                'vue',
                'vue-html'
            ],
        },
    },
    css: [
        "@/assets/css/main.css"
    ],
    router: {
        base: '/nuxt_bolg/'
    }
} as NuxtConfig)
