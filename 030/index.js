function solution(p) {
  let total = 0;
  let i;

  for (i = 2; i <= 1000000; i++) {
    if (i === powersSum(i, p)) {
      total += i;
    }
  }

  return total;
}

function powersSum(n, p) {
  let total = 0;

  while (n !== 0) {
    total += (n % 10) ** p;
    n = Math.floor(n / 10);
  }

  return total;
}

console.log(solution(5));