function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

//对传入的对象 执行一次 浅复制。
// 构造函数的原型  指向  传入的对象

// 缺点: 
// 1.依旧是篡改。
// 2.无法传递参数

// Object.create()