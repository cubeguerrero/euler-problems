const sieveOfErastosthenes = require('../_utils/sieveOfErastosthenes');
const PRIMES = sieveOfErastosthenes(1000000).map(item => item.toString());

function isTrucatablePrime(n) {
  let i, l, r;
  for (i = 0; i < n.length; i++) {
    l = n.slice(i, n.length);
    r = n.slice(0, n.length - i);
    console.log(l, PRIMES.indexOf(l), r, PRIMES.indexOf(r));
    if (PRIMES.indexOf(l) === -1 || PRIMES.indexOf(r) === -1) {
      return false;
    }
  }
  return true;
}

function solution() {
  let trucatablePrimes = PRIMES.filter(isTrucatablePrime);
  console.log(trucatablePrimes);
  console.log(trucatablePrimes.filter(item => item > 9).reduce((total, item) => total + Number(item), 0));
}

solution();