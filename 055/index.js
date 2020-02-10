function reverseString(s) {
  return s.split('').reverse().join('')
}

function reverseNum(n) {
  let nStr = n.toString()
  return Number(reverseString(nStr))
}

function isPalindome(i) {
  let iStr = i.toString()
  return iStr === reverseString(iStr)
}

function isLycrel(n) {
  let i = 0
  let num = n
  for (; i < 50; i++) {
    num += reverseNum(num)
    if (isPalindome(num)) { return false }
  }

  return true
}

function solution() {
  let i
  let total = 0
  for (i = 1; i < 10000; i++) {
    if (isLycrel(i)) {
      total++
    }
  }
  console.log(total)
}

console.time('solution')
solution()
console.timeEnd('solution')
