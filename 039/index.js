// Only right triangles satisfy the Pythagoras theorem
function isRightTriangle(a, b, c) {
  return a**2 + b**2 == c**2;
}

// We can determine the smallest right triangles 
// And since we want integers, we can rule out any isoceles right triangles
function solution() {
  let tracker = {};
  let a, b, c, p
  for (a = 1; a < 500; a++) {
    for (b = a + 1; b < 500; b++) {
      for (c = b + 1; c < 500; c++) {
        p = a + b + c;
        if (isRightTriangle(a, b, c) && p <= 1000) {
          if (p in tracker) {
            tracker[p] += 1;
          } else {
            tracker[p] = 1;
          }
        }
      }
    }
  }

  let largest = 0;
  let k = 0;
  for (let key in tracker) {
    if (tracker[key] > largest) {
      k = key;
      largest = tracker[key];
    }
  }
  console.log(k);
}

solution();