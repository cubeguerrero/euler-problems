function sieveOfEratosthenes(n) {
  if (n < 1) {
    return 0;
  }

  var tracker = Array(n + 1).fill(true);
  var primes = [];
  var i, j;

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (tracker[i]) {
      for (j = i**2; j <= n; j += i) {
        tracker[j] = false;
      }
    }
  }

  for (i = 2; i < tracker.length; i++) {
    if (tracker[i]) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(sieveOfEratosthenes(1000000)[10000]);