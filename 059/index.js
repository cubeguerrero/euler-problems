const readFile = require('../_utils/readFile')
const data = readFile('../059/cipher.txt').split(',').map(i => Number(i))
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

function decode(key) {
  return data.map((n, i)=> {
    return n ^ key[i % key.length]
  })
}

function solution() {
  let a, b, c
  let currentKey = []
  let decoded
  for (a = 0; a < ALPHABET.length; a++) {
    currentKey[0] = ALPHABET[a].charCodeAt(0)
    for (b = 0; b < ALPHABET.length; b++) {
      currentKey[1] = ALPHABET[b].charCodeAt(0)
      for (c = 0; c < ALPHABET.length; c++) {
        currentKey[2] = ALPHABET[c].charCodeAt(0)
        decoded = decode(currentKey)
        console.log(currentKey, decoded.map(s => String.fromCharCode(s)).join('i'))
      }
    }
  }
}

solution()