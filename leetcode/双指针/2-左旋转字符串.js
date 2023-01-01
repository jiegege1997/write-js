// 字符串切片

// 用函数
var reverseLeftWords = function (s, n) {
  // 前面
  let front = s.substring(0, n)

  let end = s.substring(n, s.length)

  return end + front
}

// 列表遍历拼接

// 字符串遍历拼接
