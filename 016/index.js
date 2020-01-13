function powerDigitSum(n) {
  var num = 2 ** n;
  var total = 0;
  var m;

  while (num !== 0) {
    m = num % 10;
    num = Math.floor(num / 10);
    total += m;
  }

  return total;
}

console.log(powerDigitSum(1000)); // 1366