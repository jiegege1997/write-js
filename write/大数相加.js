let a = "9007199254740991";
let b = "1234567899999999999";

function bigAdd(a, b) {
  let maxLen = Math.max(a.length, b.length)

  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')

  let flag = 0, temp = 0
  let res = ''
  
  for (let i = maxLen - 1; i >= 0; i--) {
    temp = (+a[i]) + (+b[i]) + flag

    flag = temp > 10 ? 1 : 0

    res = '' + (temp % 10) + res
  }

  if (flag === 1) {
    res = '' + flag + res
  }

  return res
}
console.log('bigAdd(a,b) :>> ', bigAdd(a, b));