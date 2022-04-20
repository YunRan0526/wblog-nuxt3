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
    webpack: {
        optimization: {
            splitChunks: {
                chunks: 'all', //三选一："initial" 初始化，"all"(默认就是all)，"async"（动态加载） 
                minSize: 30000,  // 形成一个新代码块最小的体积,只有 >= minSize 的bundle会被拆分出来
                maxSize: 0, //拆分之前最大的数值，默认为0，即不做限制
                minChunks: 1, //引入次数，如果为2 那么一个资源最少被引用两次才可以被拆分出来
                maxAsyncRequests: 12,// 按需加载的最大并行请求数
                maxInitialRequests: 6, // 一个入口最大并行请求数
                automaticNameDelimiter: '~', // 文件名的连接符
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        }
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
