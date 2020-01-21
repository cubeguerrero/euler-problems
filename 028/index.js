// There's a pattern where the upper right corner is the square of the level
// For example, in a 5x5 square the upper right corner is twenty five
// Another pattern to emerge, is each corner value is separated by level - 1
// For example, in a 5x5 spiral it would be 25, 21, 17, 13

let total = 0;
let current, counter;

for (level = 1001; level >= 3; level-=2) {
  corner = level * level;
  for (counter = 0; counter < 4; counter++) {
    total += corner;
    corner -= level - 1;
  }
}

console.log(total + 1);