// I'm going for the brute force approach.
// Since we're going to recalculate a lot of factorials over and over again,
// we can use memoization/caching.

factorials = {}
factorials[0] = 1n
factorials[1] = 1n

function factorial(n) {
  if (n in factorials) {
    return factorials[n];
  }

  let total = 1n;
  let i;
  for (i = n; i > 1n; i--) {
    total *= i;
  }
  factorials[n] = total;

  return total;
}

function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function solution() {
  let results = [];
  let n, r;

  for (n = 1n; n <= 100n; n++) {
    for (r = 0n; r <= n; r++) {
      if (combination(n, r) >= 1000000) {
        console.log(n, r, combination(n, r));
        results.push([n, r])
      }
    }
  }

  console.log(results.length);
}

console.time("solution");
solution();
console.timeEnd("solution");