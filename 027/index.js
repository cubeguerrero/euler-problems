const isPrime = require('../_utils/isPrime');
const sieveOfEratosthenes = require('../_utils/sieveOfErastosthenes');

const primes = sieveOfEratosthenes(1000);

function countConsectivePrimes(a, b) {
  let n, y;
  for (n = 0;;n++) {
    y = Math.abs(n**2 + n*a + b);
    if (!isPrime(y)) {
      return n;
    }
  }
}

let currentLongest = 0;
let currentMaxProduct = 0;
let c, i;

for (i = 0; i < primes.length; i++) {
  b = primes[i];
  for (a = -1000; a <= 1000; a++) {
    c = countConsectivePrimes(a, b);
    if (c > currentLongest) {
      currentMaxProduct = a * b;
      currentLongest = c;
    }
  }
}

console.log(currentMaxProduct);