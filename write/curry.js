//柯里化
function curry(fn) {
  return function curryFun(...args) {
    if (args.length < fn.length){
      return function() {
        return curryFun(...args.concat(...arguments))
      }
    }
    return fn(...args)
  }
}

function add(a,b,c,d) {
  return a + b + c + d
}

let curryAdd = curry(add)

console.log(curryAdd(1,2,3,4))
console.log(curryAdd(1)(2)(3)(4))
// curryAdd(1)(2)(3)(4)


// 柯里化用途
function checkByRegExp(regExp, string) {
  return regExp.test(string);
}

let curryCheck = curry(checkByRegExp)

let checkEamil = curryCheck(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
let checkPhone = curryCheck(/^1\d{10}$/)


console.log(checkEamil('test@qq.com')); // 校验邮箱
console.log(checkEamil('testgmail.com')); // 校验邮箱
console.log(checkPhone('13109840560')); // 校验电话号码
console.log(checkPhone('1320406121')); // 校验电话号码