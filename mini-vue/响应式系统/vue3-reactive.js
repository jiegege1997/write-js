// vue3响应式原理是用了proxy
// 优势 1. 能观察的类型更多
// has函数: in操作符的捕获
// deleteProperty

// 劣势: 兼容性问题
// vue3的数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, newValue) {
      if (target[key] !== newValue) {
        target[key] = newValue
        dep.notify()
      }
    },
  })
}
