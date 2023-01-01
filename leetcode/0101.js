// 第一个出现两次的字母
// 给你一个由小写英文字母组成的字符串 s ，请你找出并返回第一个出现 两次 的字母

// 输入：s = "abccbaacz"
// 输出："c"

// tips
// 2 <= s.length <= 100
// s 由小写英文字母组成
// s 包含至少一个重复字母

// 思路：使用es6的set
var repeatedCharacter = function (s) {
  let set = new Set()
  for (let str of s) {
    if (set.has(str)) {
      return str
    } else {
      set.add(str)
    }
  }
}

Set.prototype[Symbol.iterator] === Set.prototype.values
// for...of可以直接循环遍历 Set
// Set 结构的实例与数组一样，也拥有forEach方法

let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = new Set([...a, ...b])
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x)))
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x)))
// Set {1}
