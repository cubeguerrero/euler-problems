// The hexagonal numbers are a subset of the triangular numbers.
// Proof: we can subsitute 2*a - 1 to the triangular formula
// T = n(n + 1)/2
// T = (2*a - 1)(2*a - 1 + 1)/2
// T = (4*(a**2) - 2*a) / 2
// T = 2*(a**2) - a
// T = a(2*a - 1)

// With that, we can just look for the next number by going through the hexagonal series
// and checking whether that number is a pentagonal number. We can reuse the checker from
// problem 44.

function isPentagonal(n) {
  let p = (1 + Math.sqrt(1 + 24*n)) / 6;
  return p === Math.floor(p);
}

function getHexagonal(n) {
  return n * ((2 * n) - 1);
}

function solution() {
  let i = 144;
  let h;
  let found = false;

  while (!found) {
    h = getHexagonal(i);
    if (isPentagonal(h)) {
      console.log(h);
      found = true;
    }
    i++;
  }
}

solution();