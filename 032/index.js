function isPandigital(num) {
  const numArray = num.split('');
  const numLength = num.length;

  if (numLength > 9) {
    return false;
  }

  let i;
  for (i = 1; i <= numLength; i++) {
    if (numArray.indexOf(i.toString()) === -1) {
      return false;
    }
  }

  return true;
}

function gives9PandigitalProduct(a, b) {
  let numbers = a.toString() + b.toString() + (a * b).toString();
  if (numbers.length !== 9) {
    return false;
  }
  return isPandigital(numbers);
}

let products = new Set();
let i, j

for (i = 0; i < 100000; i++) {
  for (j = i; j < 100000; j++) {
    if ((i.toString() + j.toString() + (i * j).toString()).length > 9) {
      break;
    }
    if (gives9PandigitalProduct(i, j)) {
      products.add(i*j);
    }
  }
}

console.log([...products].reduce((total, i) => total + i, 0));