import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
  }
  interface RuntimeConfig {
     public: {
        NODE_ENV: string,
    },

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },
  }
}