// 思想其实就是栈  遍历一下 依次放进去即可

var reversePrint = function (head) {
  this.stack = []
  while (head !== null) {
    this.stack.unshift(head.val)
    head = head.next
  }
  return this.stack
}
