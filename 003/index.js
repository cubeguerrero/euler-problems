function getAllPrimeFactors(n) {
  var factors = []

  while (n % 2 === 0) {
    factors.push(2)
    n = n / 2
  }

  var i;
  for (i = 3; i <= Math.floor(Math.sqrt(n)) + 1; i += 2) {
    while (n % i === 0) {
      factors.push(i)
      n = n / i
    }
  }

  if (n > 2) {
    factors.push(n)
  }

  return factors
}

var primeFactors = getAllPrimeFactors(600851475143)
var largest = primeFactors[primeFactors.length - 1]
console.log(largest)