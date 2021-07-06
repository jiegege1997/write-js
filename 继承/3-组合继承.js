function child(age) {
  Person.call(this)
  this.name = 'tom'
  this.age = age
}

child.prototype = new Person()

//缺点: 调用了两次父类构造函数, 造成了不必要的消耗。

