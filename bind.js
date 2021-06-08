//注意要点
//1. 判断是不是构造函数? this instanceof resBind
//2. 保证原函数的原型对象上的属性不丢失 
const obj = {name: 'bindName', age: 18}
Function.prototype.myBind = function(context, ...args) {
  context = context || window
  let that = this
  let resBind = function(...innerArgs) {
    let result = this instanceof resBind
    return that.call(result ? this : context, ...args,...innerArgs)
  }
  resBind.prototype = Object.create(this.prototype)
  return resBind
}

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.aaaa = 'aaa'
}
Person.prototype.say = function() {
  console.log('say')
}
let bindFun = Person.myBind(obj,'name: 123',)
let a = new bindFun('age: 18')
a.say()
