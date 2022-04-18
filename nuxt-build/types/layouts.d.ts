import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "E:/GitHub Pro/我的/wblog_nuxt3/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}