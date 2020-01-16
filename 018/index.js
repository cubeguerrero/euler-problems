const fs = require('fs');
const path = require('path');

function getData(filename) {
  var file = fs.readFileSync(path.resolve(__dirname, filename)).toString('utf8');

  return file.split(/\n/).map((line) => {
    return line.split(' ').map((item) => Number(item));
  });
}


const data = getData('data.txt');

function maxSum(data) {
  var i, j, a, b;

  for (i = data.length - 2; i >= 0; i--) {
    for (j = 0; j < data[i].length; j++) {
      a = data[i + 1][j];
      b = data[i + 1][j + 1];

      if (a > b) {
        data[i][j] += a;
      } else {
        data[i][j] += b;
      }
    }
  }

  return data[0][0]
}

console.log(maxSum(data));