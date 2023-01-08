let nums = [2, 7, 11, 15],
  target = 9

var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i]

    if (!map.has(res)) {
      map.set(nums[i], i)
    } else {
      return [map.get(res), i]
    }
  }
}

console.log(twoSum(nums, target))
