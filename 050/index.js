const sieveOfErastosthenes = require('../_utils/sieveOfErastosthenes');
const N = 1000000;
const PRIMES = sieveOfErastosthenes(N);

function isPrime(n) {
  return PRIMES.indexOf(n) !== -1;
}

function getSums() {
  let sums = [];
  sums[0] = 0;
  
  let i;
  for (i = 0; i < PRIMES.length; i++) {
    sums[i + 1] = sums[i] + PRIMES[i];
  }

  return sums;
}

function solution() {
  let primeSums = getSums();
  let i, j, a, b, c;
  let largest = 0;
  let maxRun = 0;

  for (i = 0; i < primeSums.length; i++) {
    a = primeSums[i];
    for (j = i - 1; j >= 0; j--) {
      b = primeSums[j];
      c = a - b;

      if (c > N) {
        break;
      }

      if (isPrime(c) && c > largest && i - j > maxRun) {
        largest = c;
        maxRun = i - j;
      }
    }
  }

  console.log(largest);
}

solution();

