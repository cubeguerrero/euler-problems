const readFile = require('../_utils/readFile');
const bigInt = require('../_utils/BigInteger');
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getNameValue(name) {
  return name.split('').reduce((t, i) => t.plus(ALPHABET.indexOf(i) + 1), bigInt(0));
}

function getNamesFromFile(filename) {
  const file = readFile(filename);
  return file.split(',').map(name => name.replace(/\"/g, ''));
}

let names = getNamesFromFile('../022/p022_names.txt').sort();
let position, nameValue;
let total = bigInt(0);
for (position = 0; position < names.length; position++) {
  nameValue = getNameValue(names[position]);
  total = total.plus(nameValue.times(position + 1));
}

console.log(total);