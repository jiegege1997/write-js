// 不就是搞两个栈

// 一个栈正常的  一个栈按最小的都放在上面

var MinStack = function () {
  this.minStack = []
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.minStack.push(Math.min(this.min() ?? Infinity, x))
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop()
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minStack[this.minStack.length - 1]
}
