const unique = [
  'one'.length,
  'two'.length,
  'three'.length,
  'four'.length,
  'five'.length,
  'six'.length,
  'seven'.length,
  'eight'.length,
  'nine'.length,
  'ten'.length,
  'eleven'.length,
  'twelve'.length,
  'thirteen'.length,
  'fourteen'.length,
  'fifteen'.length,
  'sixteen'.length,
  'seventeen'.length,
  'eighteen'.length,
  'nineteen'.length
];

const tens = [
  'twenty'.length,
  'thirty'.length,
  'forty'.length,
  'fifty'.length,
  'sixty'.length,
  'seventy'.length,
  'eighty'.length,
  'ninety'.length
];

function countTens(ten) {
  return unique.slice(0, 9).reduce((total, item) => total += ten + item, 0);
}

function belowOneHundred() {
  const uniqueLength = unique.reduce((total, item) => total += item, 0);
  const tensLength = tens.reduce((total, item) => total += countTens(item), 0);
  return uniqueLength + tensLength;
}

function hundred(num) {
  const hundredLength = num + 'hundred'.length;
  const andLength = 'and'.length;
  let total = hundredLength;
  total += ((hundredLength + andLength) * 99) + belowOneHundred();

  return total
}


var thousand = 'one'.length + 'thousand'.length;
var total = belowOneHundred();
total += unique.slice(0, 9).reduce((total, item) => total += hundred(item), 0);
total += thousand;
console.log(total);