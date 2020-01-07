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

function getLCM(a, b) {
  var gcd = getGCD(a, b);
  return parseInt(a * b / gcd)
}

var lcm = getLCM(1, 2);

for (var i = 3; i <= 10; i++) {
  lcm = getLCM(lcm, i);
}

console.log(lcm);