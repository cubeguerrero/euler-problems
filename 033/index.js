function getGCD(a, b) {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  var temp;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }

  return getGCD(a, b % a);
}

function solution() {
  let denProduct = 1;
  let numProduct = 1;

  let i, n, d;
  for (i = 1; i < 10; i++) {
    for (d = 1; d < i; d++) {
      for (n = 1; n < d; n++) {
        if ((n * 10 + i) * d === n * (i * 10 + d)) {
          denProduct *= d;
          numProduct *= n;
        }
      }
    }
  }

  return denProduct /= getGCD(numProduct, denProduct);
}

console.log(solution());