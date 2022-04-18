import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/GitHub Pro/我的/wblog_nuxt3/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}