// Classic dynamic programming 
const bigInt = require('../_utils/BigInteger');

function solution(n, coins) {
  let ways = Array(n + 1).fill(bigInt(0));

  ways[0] = 1;

  let i, j, x;
  for (j = 0; j < coins.length; j++) {
    for (i = 0; i < ways.length; i++) {
      x = bigInt(ways[i - coins[j]]);
      ways[i] = x.plus(ways[i]);
    }
  }

  return ways
}

let n = 200;
console.log(solution(n, [1, 2, 5, 10, 20, 50, 100, 200])[n]);