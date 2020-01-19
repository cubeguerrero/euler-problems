const bigInt = require('../_utils/BigInteger');

function fibonacci() {
  var i = 2;
  var a = bigInt(1);
  var b = bigInt(1);
  var temp;
  var found = false;

  while (!found) {
    console.log(a, b);
    temp = a;
    a = b;
    b = temp.plus(a);
    i++;

    if (b.toString().split('').length === 1000) {
      return i;
    }
  }
}

console.log(fibonacci());

