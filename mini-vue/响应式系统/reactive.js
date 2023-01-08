class Dep {
  constructor() {
    this.subscribers = new Set()
  }

  addEffect(effect) {
    this.subscribers.add(effect)
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect()
    })
  }

  depend() {
    this.subscribers.add(activeEffect)
  }
}

const dep = new Dep()

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  dep.depend()
  effect()
  activeEffect = null
}

const info = { age: 20 }

watchEffect(function () {
  console.log(info.age * 2)
})

watchEffect(function () {
  console.log(info.age * info.age)
})

info.age++

setTimeout(() => {
  info.age = 40
  dep.notify()
}, 2000)

dep.notify()
