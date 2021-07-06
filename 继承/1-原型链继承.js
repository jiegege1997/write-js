function Person() {
  this.sex = '男'
  this.arr = [3, 4, 5]
}
Person.prototype.saySex = function () {
  console.log(`我的性别是${this.sex}`)
}
function child(age) {
  this.name = 'tom'
  this.age = age
}

child.prototype = new Person()

const tom = new child(18)
console.log(tom);
console.log(tom.saySex());

// 优点: 可以继承属性和方法。

// 缺点: 原型上的引用类型会造成篡改,因为是用的同一个地址
let jack = new child()
jack.arr.push(666)
console.log(tom.arr)