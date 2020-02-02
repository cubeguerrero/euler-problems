function getAllPrimeFactors(n) {
  var factors = new Set()

  while (n % 2 === 0) {
    factors.add(2)
    n = n / 2
  }

  var i;
  for (i = 3; i <= Math.floor(Math.sqrt(n)) + 1; i += 2) {
    while (n % i === 0) {
      factors.add(i)
      n = n / i
    }
  }

  if (n > 2) {
    factors.add(n)
  }

  return factors
}

function solution() {
  let i = 0;
  let start = false;
  let counter = [];
  for (i = 100000; i < 500000; i++) {
    if (getAllPrimeFactors(i).size === 4) {
      counter.push(i);
      if (counter.length === 4) {
        break;
      }
    } else {
      start = false;
      counter = [];
    }
  }
  console.log(counter);
}

solution();