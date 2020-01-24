function isPalindrome(s) {
  if (s.length <= 1) {
    return true;
  }

  let firstChar = s[0];
  let lastChar = s[s.length - 1];
  return firstChar === lastChar && isPalindrome(s.slice(1, s.length - 1));
}

function baseTwoIsPalindrome(s) {
  if (s[0] === '0') {
    return false;
  }

  return isPalindrome(s);
}

function solution() {
  let total = 0;
  let i;
  for (i = 1; i < 1000000; i++) {
    if (isPalindrome(i.toString()) && baseTwoIsPalindrome(i.toString(2))) {
      console.log(i);
      total += i;
    }
  }

  return total;
}

console.log(solution());