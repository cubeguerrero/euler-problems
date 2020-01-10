function getFactors(n) {
  var factors = [1, n];
  var i;
  for (i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      factors.push(n / i);
    }
  }

  return factors;
}

var triangle = 0;
var found = false;
var i = 1;

while (!found) {
  triangle = triangle + i;
  if (getFactors(triangle).length >= 500) {
    console.log(triangle);
    found = true;
  }
  i++;
}