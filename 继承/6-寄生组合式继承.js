function inheritPrototype(child, Parent) {
  let obj = Object.create(Parent.prototype); // 创建对象，创建父类原型的一个副本
  obj.constructor = child;                   // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  Parent.prototype = obj;                    // 指定对象，将新创建的对象赋值给子类的原型
}

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};

function child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inheritPrototype(child, Parent);

child.prototype.sayAge = function () {
  console.log(this.age);
}

var instance1 = new child("xyc", 23);
var instance2 = new child("lxy", 23);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
console.log('object :>> ', instance1.colors);
instance2.colors.push("3"); // ["red", "blue", "green", "3"]
console.log('object :>> ', instance2.colors);