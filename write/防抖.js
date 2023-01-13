function debounce(fn, delay) {
  let timer
  return function () {
    if (timer) timer = null
    setTimeout(() => {
      fn.call(this, arguments)
    }, delay)
  }
}

let a = 1
function test() {
  a = a + 1
}

const debounceTest = debounce(test, 2000)

debounceTest()
debounceTest()
debounceTest()
debounceTest()
debounceTest()

console.log("a :>> ", a)
