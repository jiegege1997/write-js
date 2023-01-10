function myPromiseAll(arr) {
  return new Promise((res, rej) => {
    let length = arr.length
    let fullfilledCount = 0
    let result = []

    for (let i = 0; i < length; i++) {
      arr[i]
        .then((resolve) => {
          result.push(resolve)
          fullfilledCount++
          if (fullfilledCount === length) {
            res(result)
          }
        })
        .catch((error) => {
          rej(error)
        })
    }
  })
}
let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1调用成功")
  }, 500)
})
let p2 = new Promise((res, rej) => {
  res("p2调用成功")
})
myPromiseAll([p1, p2]).then((res, rej) => {
  console.log(res)
})
