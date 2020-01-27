// We can assume that the number should start with 9 since 9 x 1 would yield the largest.
// Next, we can not include any two digit number (90 to 99) since n = 3 will yield 8 digits and n = 4 will yield 11 digits
// Next, we can also not include any three digit numbers (900 to 999) since n = 2 will yield 7 and n = 3 will yield 11 digits
// Next, we can rule out any 5 or above digits since we need n to be > 1 and those digits will generate a digit greater than 9 when n = 2
// So, we can check for everything between 9000 - 9999

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

function solution() {
  let pandigitals = []
  let current = '';
  let i, j;

  for (i = 9000; i <= 9999; i++) {
    current = (i).toString() + (i * 2).toString();
    if (isPandigital(current)) {
      pandigitals.push(Number(current));
    }
  }

  console.log(pandigitals);
}

solution();