function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)

      let isMounted = false
      let oldVnode = null

      watchEffect(function () {
        if (!isMounted) {
          console.log("挂载", oldVnode)
          oldVnode = rootComponent.render()
          console.log(rootComponent.render(), "aaa")
          mount(rootComponent.render(), container)
          isMounted = true
        } else {
          const newVnode = rootComponent.render()
          console.log(oldVnode, newVnode, "aabb")
          patch(oldVnode, newVnode)
          oldVnode = newVnode
        }
      })
    },
  }
}
