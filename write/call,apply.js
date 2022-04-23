let obj = { name: 'hujj', age : 18}
function testCall(data,number) {
  console.log(data,number)
  console.log(this.name)
  console.log(this.age)
}
testCall.call(obj, '调用data', 333)
testCall.apply(obj, ['调用data', 666])
Function.prototype.myCall = function(context, ...args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  context[fn](...args)
  delete context[fn]
}
testCall.myCall(obj,'mycall调用', 999)
Function.prototype.myApply = function(context, args) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  context[fn](...args)
  delete context[fn]
}
testCall.myApply(obj,['myApply调用',18])
