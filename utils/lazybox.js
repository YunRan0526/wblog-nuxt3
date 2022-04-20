const LazyBox = {
    name: 'lazyBox',
    mounted(el, binding) {
        let cache = false
        const img = el.childNodes[1]
        img.style.display = 'none'
        img.onload = function () {
            if (cache) {
                img.style.display = 'block'
            } else {
                cache = true
            }
        }
        let watcher = new IntersectionObserver(function (e) {
            if (e[0].isIntersecting) {
                if (cache) {
                    img.style.display = 'block'
                } else {
                    cache = true
                }

                watcher.unobserve(el)
                watcher.disconnect()
                watcher = null;
            }
        })
        watcher.observe(el)
    }
}
export default LazyBox