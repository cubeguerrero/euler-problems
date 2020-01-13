function buildMatrix(n) {
  var matrix = [];
  var i, j, holder;

  for (i = 0; i <= n; i++) {
    holder = [];
    for (j = 0; j <= n; j++) {
      holder[j] = 0
    }
    matrix.push(holder);
  }

  return matrix;
}

function _findLatticePaths(n, x, y, matrix) {
  if (x > n && y > n) {
    return matrix;
  }

  matrix[x][y] += 1;
  if (x + 1 <= n) {
    _findLatticePaths(n, x + 1, y, matrix);
  }

  if (y + 1 <= n) {
    _findLatticePaths(n, x, y + 1, matrix);
  }
}

function latticePathsRecursive(n) {
  var matrix = buildMatrix(n);
  _findLatticePaths(n, 0, 0, matrix);
  return matrix[n][n];
}

function latticePathsIterative(n) {
  var matrix = buildMatrix(n);
  var i, j;

  matrix[0][0] = 1;
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      x1 = i - 1;
      y1 = j - 1;

      if (x1 < 0) {
        x1 = 0;
      }

      if (y1 < 0) {
        y1 = 0;
      }

      matrix[i][j] = matrix[x1][j] + matrix[i][y1];
    }
  }

  return matrix[n][n];
}

console.log(latticePathsIterative(20));
// console.log(latticePaths(20));