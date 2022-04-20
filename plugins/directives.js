import LazyBox from '/utils/lazybox.js'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('lazybox', LazyBox)
})