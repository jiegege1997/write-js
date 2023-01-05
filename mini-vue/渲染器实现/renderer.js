const h = (tag, props, children) => {
  console.log(tag, props, children)
  // h函数转化为 vnode对象 javascript对象

  return {
    tag,
    props,
    children,
  }
}

const mount = (vnode, container) => {
  // 将vnode转换为真实的dom对象 并且在vnode上保留一份el
  const el = (vnode.el = document.createElement(vnode.tag))

  // 2. 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      // 以on开头的函数
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3. 处理chidren
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children
    } else {
      // 递归调用
      vnode.children.forEach((item) => {
        mount(item, el)
      })
    }
  }

  // 挂载到container
  container.appendChild(el)
}
