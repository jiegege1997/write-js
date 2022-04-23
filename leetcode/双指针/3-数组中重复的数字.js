
let arr = [2, 3, 1, 0, 2, 5, 3]

var findRepeatNumber = function(nums) {
  let map = new Map()

  for(let i of nums) {
    // if(map.has(i)) return i
    map.set(i,1)
    console.log(map)
  }
};

findRepeatNumber(arr)