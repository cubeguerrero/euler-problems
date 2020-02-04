const sieveOfErastosthenes = require('../_utils/sieveOfErastosthenes');
const PRIMES = sieveOfErastosthenes(10000);

function isPrime(n) {
  return PRIMES.indexOf(n) !== -1;
}

function isPerm(a, b) {
  let y = a.toString().split('').sort().join('');
  let x = b.toString().split('').sort().join('');
  return x === y;
}

function solution() {
  let i;
  let items = PRIMES.filter(item => item > 999 && item < 4000);
  let a, b, c;
  for (i = 0; i < items.length; i++) {
    a = items[i];
    b = a + 3330;
    c = b + 3330;

    if (isPrime(b) && isPrime(c) && isPerm(a, b) && isPerm(a, c)) {
      console.log(`${a}${b}${c}`);
    }
  }
}

solution();
