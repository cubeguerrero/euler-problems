const readFile = require('../_utils/readFile');
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getData(filename) {
  const file = readFile(filename);
  return file.split(',').map(name => name.replace(/\"/g, ''));
}

function getLetterValue(letter) {
  return ALPHABET.indexOf(letter) + 1;
}

function getWordValue(word) {
  let total = 0;
  let i;
  for (i = 0; i < word.length; i++) {
    total += getLetterValue(word[i]);
  }
  return total;
}

// Got the positive value of the quadratic formula
function isTriangleWord(sum) {
  let a = 1;
  let b = 1;
  let c = sum * 2 * -1;
  let x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / 2*a;
  
  return x1 === Math.floor(x1);
}

function solution() {
  const words = getData('../042/p042_words.txt');
  const triangleWords = words.filter((word) => {
    const v = getWordValue(word);
    return isTriangleWord(v);
  });
  console.log(triangleWords.length);
}

solution();