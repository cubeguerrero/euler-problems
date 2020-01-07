function sumOfSquares(a, b) {
  var total = 0;
  for (var i = a; i <= b; i++) {
    total += i * i;
  }

  return total
}

function squareOfSum(a, b) {
  var total = 0;
  for (var i = a; i <= b; i++) {
    total += i;
  }

  return total * total;
}

console.log(squareOfSum(1, 100) - sumOfSquares(1, 100))