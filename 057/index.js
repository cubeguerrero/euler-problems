// We can see a pattern forming between the iterations numerator and denominator
// 3rd iteration 17 is 7 (2nd iteration) * 2 + 3 (1st iteration) - numerator
// 3rd iteration 12 is 5 (2nd iteration) * 2 + 2 (1st iteration) - denominator
// 4rd iteration 41 is 17 (3nd iteration) * 2 + 7 (2st iteration) - numerator
// 4rd iteration 29 is 12 (3nd iteration) * 2 + 5 (2st iteration) - denominator

function countDigits(n) {
  return n.toString().split('').length
}

function solveNext(n, m) {
  return n * 2n + m
}

function solution() {
  let numerator = []
  let denominator = []

  numerator[1] = 3n
  numerator[2] = 7n
  numerator[3] = 17n

  denominator[1] = 2n
  denominator[2] = 5n
  denominator[3] = 12n

  let total = 0
  let i
  for (i = 4; i <= 1000; i++) {
    numerator[i] = solveNext(numerator[i - 1], numerator[i - 2])
    denominator[i] = solveNext(denominator[i - 1], denominator[i - 2])

    if (countDigits(numerator[i]) > countDigits(denominator[i])) {
      total++
    }
  }

  console.log(total)
}

console.time("solution")
solution()
console.timeEnd("solution")