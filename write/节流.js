function throttle(fn, delay) {
  let pre = 0;
  return () => {
    const now = Date.now();
    if (now - pre > delay) {
      pre = now
      fn(arguments);
    }
  }
}

let a = 1
function test() {
  a = a + 1
}

const throttleTest = throttle(test, 2000);

setInterval(() => {
  throttleTest();
  console.log('a :>> ', a);
}, 1000);

