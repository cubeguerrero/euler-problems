const unique = [
  0,
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
  0,
  0,
  "twenty".length,
  "thirty".length,
  "forty".length,
  "fifty".length,
  "sixty".length,
  "seventy".length,
  "eighty".length,
  "ninety".length
];

const hundred = 'hundred'.length;
const and = 'and'.length;
const thousand = 'thousand'.length;

function getForDoubleDigit(digit) {
  if (digit < 20) {
    return unique[digit]
  } else {
    var o = digit % 10;
    var t = Math.floor(digit / 10);
    return tens[t] + unique[o];
  }
}

function getForHundreds(digit) {
  var h = Math.floor(digit / 100);
  var dd = digit % 100;
  var total = unique[h] + hundred;

  if (dd !== 0) {
    total += and + getForDoubleDigit(dd);
  }

  return total;
}

function getForThousands(digit) {
  var t = Math.floor(digit / 1000);
  var h = digit % 1000;
  var total = unique[t] + thousand;

  if (h !== 0){
    total += getForHundreds(h);
  }

  return total;
}

var i;
var current = 0;
var total = 0;
for(i = 1; i <= 1000; i++) {
  if (i < 100) {
    current = getForDoubleDigit(i);
  } else if (i < 1000) {
    current = getForHundreds(i);
  } else {
    current = getForThousands(i);
  }
  total += current;
}

console.log(total);