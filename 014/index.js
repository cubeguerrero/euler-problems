function collatz(n, data = []) {
  if (n === 1) {
    return data.push(1);
  }

  data.push(n);

  if (n % 2 === 0) {
    collatz(n/2, data);
  } else {
    collatz((3*n)+1, data);
  }

  return data;
}

var longest = 1000000;
var currentLongestLength = 0;
var i, collatzData;

for (i = 999999; i > 0; i--) {
  collatzData = collatz(i);
  if (collatzData.length > currentLongestLength) {
    longest = i;
    currentLongestLength = collatzData.length;
  }
}

console.log(longest);