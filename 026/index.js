function getUnitFraction(denominator) {
  let numerator = 1;
  let tracker = {}
  let t = 0;

  while (tracker[numerator] === undefined) {
    tracker[numerator] = t;
    numerator = (numerator % denominator) * 10
    t++
  }

  return Object.keys(tracker);
}

let current = 1;
let max = 0;
let l;
let i;

for (i = 2; i < 1000; i++) {
  l = getUnitFraction(i).length;
  if (l > max) {
    max = l;
    current = i;
  }
}

console.log(current);