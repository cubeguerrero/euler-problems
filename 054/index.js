const readFile = require('../_utils/readFile');

const Hand = require('./hand.js')
const Card = require('./card.js')

let gameList = readFile('../054/p054_poker.txt').split(/\n/)

function buildHand(l, start, end) {
  let i;
  let cards = []
  for (i = start; i <= end; i++) {
    let [v, s] = l[i].split('')
    let card = new Card(s, v)
    cards.push(card)
  }

  return new Hand(cards)
}

gameList = gameList.slice(0, 1000)
gameList = gameList.map(l => {
  let y = l.split(' ')
  let hand1 = buildHand(y, 0, 4)
  let hand2 = buildHand(y, 5, 9)
  return [hand1, hand2]
})

console.time("solution");
let total = 0
gameList.forEach(g => {
  if (g[0].compare(g[1])) {
    total += 1
  }
})
console.log(total)
console.timeEnd("solution");