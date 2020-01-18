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

function isAbundantNumber(n) {
  return n < sumOfDivisors(n);
}

function getAllAbundantNumbers(n) {
  let i;
  let numbers = []
  for (i = 1; i < n; i++) {
    if (isAbundantNumber(i)) {
      numbers.push(i);
    }
  }

  return numbers;
}

function getSumsOfAbundantNumbers(numbers) {
  let sums = [];
  let i, j;

  for (i = 0; i < numbers.length; i++) {
    for (j = i; j < numbers.length; j++) {
      sums.push(numbers[i] + numbers[j]);
    }
  }

  return sums;
}

function sumOfNumAbundantSums(sumsOfAbundantSums) {
  let total = 0;
  let i;
  for (i = 0; i < 28123; i++) {
    if (sumsOfAbundantSums.indexOf(i) === -1) {
      total += i;
    }
  }

  return total;
}

const numbers = getAllAbundantNumbers(28123);
const sums = getSumsOfAbundantNumbers(numbers);
const total = sumOfNumAbundantSums(sums);

console.log(total);
