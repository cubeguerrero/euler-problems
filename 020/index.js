const bigInt = require("./BigInteger");

function factorial(n) {
  let total = bigInt(1);
  let i;

  for (i = 1; i <= n; i++) {
    total = total.times(i);
  }

  return total;
}

function factorialDigitSum(n) {
  let num = factorial(n);
  let mod;
  let divMod;
  let total = bigInt(0);

  while (num.compare(0) !== 0) {
    divMod = num.divmod(10);
    num = divMod.quotient;
    mod = divMod.remainder;
    total = total.plus(mod);
  }

  return total;
}

console.log(factorialDigitSum(100));