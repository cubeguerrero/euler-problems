function isPrime(n) {
  let i;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

function solution() {
  let currentCorner = 9;
  let level = 3;
  let noOfPrimes = 3;
  let diagonalValuesCount = 5;

  let ratio = noOfPrimes / diagonalValuesCount
  let i;
  while (ratio > 0.1) {
    level += 2
    diagonalValuesCount += 4

    for (i = 0; i < 4; i++) {
      currentCorner += level - 1;
      if (isPrime(currentCorner)) { noOfPrimes++ }
    }

    ratio = noOfPrimes / diagonalValuesCount
  }
  console.log(level)
}

console.time("solution")
solution()
console.timeEnd("solution")