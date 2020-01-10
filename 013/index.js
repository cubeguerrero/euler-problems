const fs = require('fs');
const path = require('path');

function getData(filename) {
  var data = [];
  var file = fs.readFileSync(path.resolve(__dirname, filename)).toString('utf8');

  return file.split(/\n/).map((item) => parseFloat(item));
}

var numbers = getData('data.txt');
var sum = numbers.reduce((total, item) => total + item, 0);
console.log(sum);