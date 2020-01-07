function isNumberPalindrome(n) {
  return n === reverse(n)
}

function reverse(n) {
  return parseInt(n.toString().split('').reverse().join(''))
}

var i, j, product;
var largest = 0;

for (i = 999; i >= 100; i--) {
  for (j = 999; j >= 100; j--) {
    product = i * j

    if (isNumberPalindrome(product) && product > largest) {
      largest = product
    }
  }
}

console.log(largest);