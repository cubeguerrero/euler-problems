function sumAllMultiplesOf3And5(n) {
  var total = 0;
  var i;

  for (i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

var sum = sumAllMultiplesOf3And5(1000);
console.log(sum);