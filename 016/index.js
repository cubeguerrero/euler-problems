const bigInt = require('../_utils/BigInteger');

function powerOfTwo(n) {
  let total = bigInt(1);
  let i = 0;
  for (i = 0; i < n; i++) {
    total = total.times(2);
  }

  return total;
}

function powerDigitSum(n) {
  var num = powerOfTwo(n);
  var total = bigInt(0);
  var m, divMod;

  while (num.compare(0) !== 0) {
    divMod = num.divmod(10);
    num = divMod.quotient;
    total = total.plus(divMod.remainder);
  }

  return total;
}

console.log(powerDigitSum(1000));