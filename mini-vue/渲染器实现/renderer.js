// 用于返回vnode对象
const h = (tag, props, children) => {
  console.log(tag, props, children)
  // h函数转化为 vnode对象 javascript对象

  return {
    tag,
    props,
    children,
  }
}
// 用于将vnode挂载到Dom上
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

// patch函数
const patch = (n1, n2) => {
  // debugger
  // 1. 比较tag 如果tag都不一样 直接整个替换
  if (n1.tag !== n2.tag) {
    const n1Parent = n1.el.parentElement
    n1Parent.removeChild(n1.el)
    mount(n2, n1Parent)
  } else {
    // 1. 取出elment对象 并且在n2里保存
    const el = (n2.el = n1.el)

    // 2. 处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}

    // 2.1. 将新的props添加到el上面
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (oldValue !== newValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }
    // 2.2. 将旧的props删除
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith("on")) {
          const value = oldProps[key]
          el.removeEventListener(key.slice(2).toLowerCase(), value)
        } else {
          el.removeAttribute(key)
        }
      }
    }

    // 3. 处理children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []

    // 3.1 当新children是字符串
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (oldChildren !== newChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }
    }

    // 3.2 当新children不是字符串
    if (typeof newChildren !== "string") {
      if (typeof oldChildren === "string") {
        el.innerHTML = ""
        newChildren.forEach((item) => {
          mount(item, el)
        })
      } else {
        // 旧和新都是数组了
        // oldChildren: [v1, v3, v5]
        // newChildren: [v2, v4, v3, v5]
        // 先找到最短长度
        const commonLength = Math.min(oldChildren.length, newChildren.length)

        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }

        if (oldChildren.length > commonLength) {
          oldChildren.slice(commonLength).forEach((item) => {
            el.removeChild(item.el)
          })
        }

        if (newChildren.length > commonLength) {
          newChildren.slice(commonLength).forEach((item) => {
            mount(item, el)
          })
        }
      }
    }
  }
}
