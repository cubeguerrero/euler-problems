const sieveOfErastosthenes = require('../_utils/sieveOfErastosthenes');

function isSatisfied(n) {
  let primes = sieveOfErastosthenes(n);
  let i, s;
  for (i = 0; i <= primes.length; i++) {
    s = Math.sqrt((n - primes[i])/2);
    if (s === Math.floor(s)) {
      return true;
    }
  }

  return false;
}

function solution() {
  let n = 9;
  let found = false;

  while (!found)  {
    if (!isSatisfied(n)) {
      console.log(n);
      found = true;
    }
    n += 2;
  }
}

solution();