function myPromiseRace(arr) {
  return new Promise((res, rej) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then((resolve) => {
          res(resolve)
        })
        .catch((error) => {
          rej(error)
        })
    }
  })
}

/**
 * 验证
 */
//p1:0.5s后转化为fullfilled状态
let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1调用成功")
  }, 500)
})

//p2: 直接转化为res状态
let p2 = new Promise((res, rej) => {
  res("p2调用成功")
})

//p3: 1s后转化为rejected状态
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p3失败了...")
  }, 1000)
})

//p4: 2s后转化为rejected状态
let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p4失败了...")
  }, 2000)
})

//传入p1,p2
myPromiseRace([p1, p2]).then((res) => {
  console.log(res) //p2调用成功
})

//传入p1,p3
myPromiseRace([p1, p3])
  .then((res) => {
    console.log(res) //p1调用成功
  })
  .catch((rej) => {
    console.log(rej)
  })

//传入p3,p4
myPromiseRace([p3, p4])
  .then((res) => {
    console.log(res)
  })
  .catch((rej) => {
    console.log(rej) //p3失败了...
  })
