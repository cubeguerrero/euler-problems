const fs = require('fs');
const path = require('path');

function getData(filename) {
  var data = [];
  var file = fs.readFileSync(path.resolve(__dirname, filename)).toString('utf8');

  return file.split(/\n/).map((line) => {
    return line.split(' ').map((item) => Number(item));
  });
}

function getHorizontalProduct(data) {
  var products = [];
  var i, j, line;

  for (i = 0; i < data.length; i++) {
    line = data[i];
    for (j = 0; j < line.length - 4; j++) {
      products.push(line[j] * line[j + 1] * line[j + 2] * line[j + 3]);
    }
  }

  return products;
}

function getVerticalProduct(data) {
  var products = [];
  var i, j, line;

  for (i = 0; i < data.length - 4; i++) {
    line = data[i];
    for (j = 0; j < line.length; j++) {
      products.push(line[j] * data[i + 1][j] * data[i + 2][j] * data[i + 3][j]);
    }
  }

  return products;
}

function getDiagonalLToRProduct(data) {
  var products = [];
  var i, j, line;

  for (i = 0; i < data.length - 4; i++) {
    line = data[i];
    for (j = 0; j < line.length - 4; j++) {
      products.push(line[j] * data[i + 1][j + 1] * data[i + 2][j + 2] * data[i + 3][j + 3]);
    }
  }

  return products;
}

function getDiagonalRToLProduct(data) {
  var products = [];
  var i, j, line;

  for (i = 0; i < data.length - 4; i++) {
    line = data[i];
    for (j = 3; j < line.length; j++) {
      products.push(line[j] * data[i + 1][j - 1] * data[i + 2][j - 2] * data[i + 3][j - 3]);
    }
  }

  return products;
}

const data = getData('data.txt');
const products = getHorizontalProduct(data).concat(getVerticalProduct(data).concat(getDiagonalLToRProduct(data).concat(getDiagonalRToLProduct(data))))
products.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (b > a) {
      return 1;
  }
  return 0;
});

console.log(products[0]);