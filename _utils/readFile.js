const fs = require('fs');
const path = require('path');

const readFile = (filename) => {
  return fs.readFileSync(path.resolve(__dirname, filename)).toString('utf8');
};

if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
  module.exports = readFile;
}