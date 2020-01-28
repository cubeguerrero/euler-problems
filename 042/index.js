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

// Get the positive value resulting from quadratic formula
// t = (1/2)*n*(n+1) is the triangle formula and since we know `t`
// we can simplify the solution into
// 2*t = n*(n + 1)
// 0 = n**2 + n + 2*t
// Then we can use the quadratic formula to solve for the positive factor
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