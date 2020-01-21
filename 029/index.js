const bigInt = require('../_utils/BigInteger');

let set = new Set();

let x;
for (a = 2; a <= 100; a++) {
  x = bigInt(a);
  for (b = 2; b <= 100; b++) {
    set.add(x.pow(b).value);
  }
}

console.log(set.size);