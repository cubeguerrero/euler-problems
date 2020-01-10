function checkPythagoreanTriplet(a, b, c) {
  return (a**2 + b**2 === c**2);
}

function sumPythagoreanTriplet(a, b, c) {
  return a + b + c;
}

function productPythagoreanTriplet(a, b, c) {
  return a * b * c;
}

var a, b, c;

for (a = 1; a <= 1000; a++) {
  for (b = a + 1; b <= 1000; b++) {
    for (c = b + 1; c <= 1000; c++) {
      if (checkPythagoreanTriplet(a, b, c) && sumPythagoreanTriplet(a, b, c) === 1000) {
          console.log(productPythagoreanTriplet(a, b, c));
          a = 1001;
          b = 1001;
          c = 1001;
      }
    }
  }
}