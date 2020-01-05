function sumOfEvenFibonacci() {
  var sum = 0;

  var a = 0;
  var b = 1;
  var temp;

  while (a < 4000000 || b < 4000000) {
    temp = a;
    a = b;
    b = temp + a;

    if (b % 2 === 0) {
      sum += b;
    }
  }

  return sum;
}

var sum = sumOfEvenFibonacci();
console.log(sum);