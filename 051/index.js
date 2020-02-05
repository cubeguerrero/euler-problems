const sieveOfErastosthenes = require('../_utils/sieveOfErastosthenes');
const PRIMES = sieveOfErastosthenes(1000000).filter(item => {
  return item.toString().length - new Set(item.toString()).size >= 3;
});

function counter(s) {
  let x = {};
  let i;
  for (i = 0; i < s.length; i++) {
    if (s[i] in x) {
      x[s[i]] += 1;
    } else {
      x[s[i]] = 1;
    }
  }

  return x;
}

function intersection(o1, o2) {
  return Object.keys(o1).filter(k => {
    return (o1[k] - o2[k] > 0)
  });
}

function generator(n) {
  let s = n.toString();
  let solutions = [];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let j;
  let a = counter(s);
  let b = counter(Array.from(new Set(s)).join(''));
  let ix = intersection(a, b);

  for (j = 0; j < ix.length; j++) {
    let temp = nums.map(n => {
      let r = new RegExp(ix[j], 'g')
      return Number(s.replace(r, n));
    });
    solutions.push(temp);
  }

  return solutions;
}

let checked = []
function check(l) {
  return l.filter(item => {
    checked.push(item);
    return PRIMES.indexOf(item) !== -1;
  });
}

function solution() {
  let flag = true
  let i = 0;
  while(i < PRIMES.length && flag) {
    if (checked.indexOf(PRIMES[i]) === -1) {
      let replacements = generator(PRIMES[i]);
      replacements.forEach(item => {
        let c = check(item);
        if (c.length === 8) {
          console.log(c[0]);
          flag = false
        }
      });
      if (!flag) { break; }
    }
    i++;
  }
}

solution();