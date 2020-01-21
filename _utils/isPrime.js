function isPrime(n) {
  let i;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
}

if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
  module.exports = isPrime;
}