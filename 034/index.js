function factorial(n) {
  if (n < 2) {
    return 1;
  }

  let total = 1;
  let i;
  for(i = n; i >= 2; i--) {
    total *= i;
  }

  return total;
}

function digitFactorialsSum(n) {
  let nStr = n.toString();
  let total = 0;
  let i;
  for (i = 0; i < nStr.length; i++) {
    total += factorial(Number(nStr[i]));
  }

  return total;
}

function isDigitFactorial(n) {
  var sum = digitFactorialsSum(n);
  return sum === n;
}

let total = 0;
let i;
for (i = 3; i <= 100000; i++) {
  if (isDigitFactorial(i)) {
    total += i;
  }
}

console.log(total);