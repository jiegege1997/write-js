function myInstanceof(left, right) {
  while(true) {
    if(left === null) {
      return false 
    }
    if(left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__
  }
}
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log(123)
}
const lily = new Person('lily', 18)
const tom = 'tomBoy'
console.log(myInstanceof(lily, Person))
console.log(myInstanceof(tom, Person))