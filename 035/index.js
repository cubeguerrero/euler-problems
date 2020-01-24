const sieveOfErastosthenes = require('../_utils/sieveOfErastosthenes');

const PRIMES = sieveOfErastosthenes(1000000).map(item => item.toString());

function cycle(n) {
  let copy = [...n];
  let first = copy.shift();
  copy.push(first);
  return copy;
}

function isCircularPrime(n) {
  let current = cycle(n.split(''));
  while (current.join('') !== n) {
    if (PRIMES.indexOf(current.join('')) === -1) {
      return false;
    }
    current = cycle(current);
  }
  return true;
}

function solution() {
  let i, n;
  let circularPrimes = [];
  for (i = 0; i < PRIMES.length; i++) {
    n = PRIMES[i];
    if (isCircularPrime(n)) {
      circularPrimes.push(n);
    }
  }

  return circularPrimes;
}

console.log(isCircularPrime('19'));

let answer = solution();
console.log(answer);
console.log(answer.length);