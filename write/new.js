//思路
//1.创建一个对象 __proto__指向构造函数的prototype
//2.通过call方法 改变this指向
//3.判断返回值是否是函数或者对象
//  是: 直接返回函数或者对象
//  否: 返回之前创建的对象

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
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res
  }
  return obj
}
const hujj = new Person('hujunjie', 24)
const xiaoming = myNew(Person, 'xiaoming', 33)
console.log(hujj)
console.log(xiaoming)