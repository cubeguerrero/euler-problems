function digitSum(n) {
  let total = 0n

  while (n > 0n) {
    total += n % 10n
    n = n / 10n
  }

  return total
}

function solution() {
  let a;
  let b;
  let max = 0n;

  for (a = 1n; a < 100n; a++) {
    for (b = 1n; b < 100n; b++) {
      let n = a ** b;
      let d = digitSum(n);

      if (d > max) {
        max = d
      }
    }
  }

  console.log(max)
}

console.time("solution")
solution()
console.timeEnd("solution")