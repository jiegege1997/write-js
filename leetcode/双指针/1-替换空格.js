// 双指针题目  5  15  18  27  142  206  344
// 基本思路:
// 1. 将字符串转换成数组   =====>  统计空格数量，然后创建新数组 提前按空格数量充满
// 2. 遍历  如果是空格 则是0 2 %

let string = "We are happy."

var replaceSpace = function (s) {
  let oldArr = s.split("")
  let oldLen = oldArr.length
  let emptyNum = 0
  for (let i = 0; i < oldLen; i++) {
    if (oldArr[i] === " ") emptyNum++
  }

  let newArr = []
  newArr.length = oldArr.length + emptyNum * 2
  let newLen = newArr.length

  for (let i = oldLen - 1, j = newLen - 1; i >= 0; i--, j--) {
    if (oldArr[i] !== " ") {
      newArr[j] = oldArr[i]
    } else {
      newArr[j] = "0"
      newArr[j - 1] = "2"
      newArr[j - 2] = "%"
      j = j - 2
    }
  }

  return newArr.join("")
}

console.log(replaceSpace(string))
