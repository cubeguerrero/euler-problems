const VALUES = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'T': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14
}

const SUITS = {
  'S': 4,
  'H': 3,
  'D': 2,
  'C': 1
}

module.exports = class Card {
  constructor(suit, value) {
    this.suit = SUITS[suit]
    this.value = VALUES[value]
  }

  totalValue() {
    return this.suit + this.value
  }

  compare(card) {
    if (this.value === card.value) {
      if (this.suit > card.suit) {
        return 1
      } else {
        return -1
      }
    } else if (this.value > card.value) {
      return 1
    } else {
      return -1
    }
  }
}