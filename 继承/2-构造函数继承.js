function Person() {
  this.sex = '男'
  this.arr = [3, 4, 5]
}
Person.prototype.saySex = function () {
  console.log(`我的性别是${this.sex}`)
}
function child(age) {
  Person.call(this)
  this.name = 'tom'
  this.age = age
}

const tom = new child(18)

//继承不到原型上的方法。  报错
console.log(tom.saySex())