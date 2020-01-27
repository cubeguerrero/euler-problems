const bigInt = require('../_utils/BigInteger');

let i = 1;
let lessThan = true;
let current = '';
while (lessThan) {
  current += i;
  if (current.length >= 10000000) {
    lessThan = false;
  }
  i++;
}

let nums = current.split('');
let j;
let total = 1;
for (j = 0; j <= 6; j++) {
  let y = (10 ** j) - 1;
  total *= Number(nums[y]);
}

console.log(total);