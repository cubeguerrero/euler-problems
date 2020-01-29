function nextPermutationGenerator(a) {
  // Find the largest k such that a[k] < a[k + 1]
  // If no such index exists, then the given permutation is the last one.
  let k = a.length - 2;
  while (k >=0 && a[k] >= a[k + 1]) { k-- }
  if (k < 0) return null;

  // Find the largest index i greater than k such that a[k] < a[i]
  let i = a.length - 1;
  while (i > k && a[k] >= a[i]) { i -- }
  if (i < k) return 'Something\'s wrong';

  // Swap a[k] and a[i]
  let temp = a[k];
  a[k] = a[i];
  a[i] = temp;

  // Reverse the sequence from a[k + 1] up to and including the final element.
  let result = [];
  let j;

  for (j = 0; j <= k; j++) {
    result.push(a[j]);
  }
  for (j = a.length - 1; j > k; j--) {
    result.push(a[j]);
  }

  return result;
}

function checker(n) {
  if (Number(n[0]) === 0) { return false; }
  if (Number(n[1] + n[2] + n[3]) % 2 !== 0) { return false; }
  if (Number(n[2] + n[3] + n[4]) % 3 !== 0) { return false; }
  if (Number(n[3] + n[4] + n[5]) % 5 !== 0) { return false; }
  if (Number(n[4] + n[5] + n[6]) % 7 !== 0) { return false; }
  if (Number(n[5] + n[6] + n[7]) % 11 !== 0) { return false; }
  if (Number(n[6] + n[7] + n[8]) % 13 !== 0) { return false; }
  if (Number(n[7] + n[8] + n[9]) % 17 !== 0) { return false; }
  return true;
}

let current = '0123456789'.split('');
let i;
let sum = 0;
while (current) {
  if (checker(current)) {
    sum += Number(current.join(''));
  }
  current = nextPermutationGenerator(current);
}

console.log(sum);
// console.log(permutations);