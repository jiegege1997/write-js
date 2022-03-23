
// 不就是弄两个栈吗  一个专门进  一个专门出

//  进的只进

//  出的你要看一下           出的里面还有没有     再把进的全部倒豆子

var CQueue = function() {
  this.stackA = []
  this.stackB = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if(this.stackB.length === 0) {
      // 执行完倒豆子
      while(this.stackA.length) {
          this.stackB.push(this.stackA.pop())
      }
      if(this.stackB.length === 0) {
          return -1
      } else {
          return this.stackB.pop()
      }
  } else {
    return this.stackB.pop()
  }
};
