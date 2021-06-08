function Person(name, age) {
  this.name = name
  this.age = age
  // 特殊处理情况 就是返回的是对象 或者 function
  // return {
  //   obj: 'test'
  // }
}

function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype)
    const res = fn.call(obj, ...args)
    if(res && (typeof res === 'object' || typeof res === 'function')) {
      return res 
    }
    return obj 
}
const hujj = new Person('hujunjie', 24)
const xiaoming = myNew(Person,'xiaoming',33)
console.log(hujj)
console.log(xiaoming)