function isPandigital(num) {
  const numArray = num.split('');
  const numLength = num.length;

  if (numLength > 9) {
    return false;
  }

  let i;
  for (i = 1; i <= numLength; i++) {
    if (numArray.indexOf(i.toString()) === -1) {
      return false;
    }
  }

  return true;
}

function isPrime(n) {
  let i;
  for (i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let i;
for (i = 7654321; i >= 1; i--) {  
  if (isPandigital(i.toString()) && isPrime(i)) {
    console.log(i);
    break;
  }
}