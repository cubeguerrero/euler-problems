function solution() {
  let total = 0n

  let i;
  for (i = 1n; i <= 1000n; i++) {
    total += i ** i;
  }

  let s = total.toString();
  console.log(s.slice(s.length - 10, s.length));
}

solution();