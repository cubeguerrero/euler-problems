function getDivisors(n) {
  let divisors = [];
  let i;

  for (i = 1; i <= (n / 2); i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function sumOfDivisors(n) {
  return getDivisors(n).reduce((total, item) => total + item, 0);
}

function findAmicablePairs(n) {
  let amicablePairs = {};
  let i, sum1, sum2;
  for (i = 1; i < n; i++) {
    sum1 = sumOfDivisors(i);
    sum2 = sumOfDivisors(sum1);

    // Do not include perfect pairs
    if (i === sum1) {
      continue;
    }

    if (sum2 === i && !amicablePairs[sum1]) {
      amicablePairs[i] = sum1;
    }
  }

  return amicablePairs;
}

const pairs = findAmicablePairs(10000);
const keySum = Object.keys(pairs).reduce((t, i) => t + Number(i), 0);
const valSum = Object.values(pairs).reduce((t, i) => t + i, 0);
console.log(keySum + valSum);