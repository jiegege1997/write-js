class DepObject {
  constructor() {
    this.subscribers = new Set()
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect()
    })
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
}

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

const targetMap = new WeakMap()
function getDep(target, key) {
  // 1. 根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target)

  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  // 2.取出具体的dep对象
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new DepObject()
    depsMap.set(key, dep)
  }

  return dep
}
// vue2的数据劫持
// function reactive(raw) {
//   Object.keys(raw).forEach((key) => {
//     const dep = getDep(raw, key)
//     let value = raw[key]

//     Object.defineProperty(raw, key, {
//       get() {
//         dep.depend()
//         return value
//       },
//       set(newValue) {
//         if (value !== newValue) {
//           value = newValue
//           dep.notify()
//         }
//       },
//     })
//   })
// }
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
        const dep = getDep(target, key)
        target[key] = newValue
        dep.notify()
      }
    },
  })
}

const info = reactive({ age: 20, sex: "男", title: "总监" })
const hjj = reactive({ age: 24, title: "前端开发工程师" })
const proxy = reactive({ name: "123" })
reactive(hjj)
proxy.name = 333

// watchEffect(function () {
//   console.log("更新")
//   console.log(info.age * 2)
// })

// watchEffect(function () {
//   console.log("hjj年龄变化了")
//   console.log(hjj.age, "aaa")
// })
// info.age = 40
// info.sex = "女"
// hjj.age = 25
