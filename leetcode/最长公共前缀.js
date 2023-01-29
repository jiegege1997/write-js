let strs = ["flower", "flow", "flight"]

let str1 = "flower"
let str2 = "flight"
// 求出两个字符串的最大公共前缀
function getSameStr(a, b) {
  let str = ""
  let minLength = Math.min(a.length, b.length)
  for (let i = 0; i < minLength; i++) {
    if (a[i] === b[i]) {
      str += a[i]
    } else {
      return str
    }
  }
  return str
}

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0]
  return strs.reduce(getSameStr)
}
// 数组的reduce方法
let numberArray = [0, 1, 2, 3, 4, 5]

// 如果没初始值 则accumulator为第一个 currentValue为数组第二个
numberArray.reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue
})
// 提供初始值为 10
numberArray.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue
}, 10)
