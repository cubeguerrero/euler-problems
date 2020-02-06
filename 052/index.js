function convertToSorted(n) {
  return n.toString().split('').sort().join('');
}

function solution() {
  const TIMES = [2, 3, 4, 5, 6];
  let i = 100000;
  let found = false
  while (!found) {
    let s = convertToSorted(i);
    let v = TIMES.map(n => convertToSorted(n * i));
    if (v.every(n => n === s)) {
      found = true;
      console.log(i);
      break;
    }
    i++;
  }
}

solution();