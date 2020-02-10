function isStraight(h) {
  console.log(h)
  for (let i = 0; i < 4; i++) {
    if (h[i].value !== h[i + 1].value - 1){
      return -1
    }
  }

  return h[4].value
}

function isFlush(h) {
  for (let i = 0; i < 4; i++) {
    if (h[i].suit !== h[i + 1].suit) {
      return -1
    }
  }

  return h[4].value
}

function isStraighFlush(h) {
  if (isFlush(h) > 0  && isStraight(h) > 0) {
    return h[4].value
  }
  return -1
}

function isRoyalFlush(h) {
  if (isFlush(h) === 14) { return 14 }
  return -1
}

function isFourOfAKind(h) {
  if (h[0].value === h[1].value && h[1].value === h[2].value && h[2].value === h[3].value) {
    return h[0].value
  }

  if (h[1].value === h[2].value && h[2].value === h[3].value && h[3].value === h[4].value) {
    return h[1].value
  }

  return -1
}

function isFullHouse(h, set) {
  if (set === 1 && h[0].value === h[1].value && h[1].value === h[2].value && h[3].value === h[4].value) {
    return h[0].value
  }

  if (set === 2 && h[0].value === h[1].value && h[1].value === h[2].value && h[3].value === h[4].value) {
    return h[4].value
  }

  if (set === 1 && h[0].value === h[1].value && h[2].value === h[3].value && h[3].value === h[4].value) {
    return h[4].value
  }

  if (set === 2 && h[0].value === h[1].value && h[2].value === h[3].value && h[3].value === h[4].value) {
    return h[0].value
  }

  return -1
}

function isThreeOfAKind(h) {
  if (h[0].value === h[1].value && h[1].value === h[2].value) {
    return h[0].value
  }

  if (h[1].value === h[2].value && h[2].value === h[3].value) {
    return h[1].value
  }

  if (h[2].value === h[3].value && h[3].value === h[4].value) {
    return h[2].value
  }

  return -1
}

function isTwoPairs(h, set) {
  if (set === 1 && h[0].value === h[1].value && h[2].value === h[3].value) {
    return h[0].value
  }

  if (set === 2 && h[0].value === h[1].value && h[2].value === h[3].value) {
    return h[2].value
  }

  if (set === 1 && h[0].value === h[1].value && h[3].value === h[4].value) {
    return h[0].value
  }

  if (set === 2 && h[0].value === h[1].value && h[3].value === h[4].value) {
    return h[3].value
  }

  if (set === 1 && h[1].value === h[2].value && h[3].value === h[4].value) {
    return h[1].value
  }

  if (set === 2 && h[1].value === h[2].value && h[3].value === h[4].value) {
    return h[3].value
  }

  return -1
}

function isOnePair(h) {
  if (h[0].value === h[1].value) { return h[0].value }
  if (h[1].value === h[2].value) { return h[1].value }
  if (h[2].value === h[3].value) { return h[2].value }
  if (h[3].value === h[4].value) { return h[3].value }
  return -1
}

function isHighCard(h, c) {
  return h[4 - c].value;
}

module.exports = class Hand {
  constructor(cards = []) {
    this.cards = cards
    this.sortCards()
  }

  sortCards() {
    // sort cards by value
    this.cards.sort((a, b) => a.compare(b))
  }

  compare(h2) {
    if (isRoyalFlush(this.cards) !== isRoyalFlush(h2.cards)) { return isRoyalFlush(this.cards) > isRoyalFlush(h2.cards) }
    if (isStraighFlush(this.cards) !== isStraighFlush(h2.cards)) { return isStraighFlush(this.cards) > isStraighFlush(h2.cards) }
    if (isFourOfAKind(this.cards) !== isFourOfAKind(h2.cards)) { return isFourOfAKind(this.cards) > isFourOfAKind(h2.cards) }
    if (isFullHouse(this.cards, 1) !== isFullHouse(h2.cards, 1)) { return isFullHouse(this.cards, 1) > isFullHouse(h2.cards, 1) }
    if (isFullHouse(this.cards, 2) !== isFullHouse(h2.cards, 2)) { return isFullHouse(this.cards, 2) < isFullHouse(h2.cards, 2) }
    if (isFlush(this.cards) !== isFlush(h2.cards)) { return isFlush(this.cards) > isFlush(h2.cards) }
    if (isStraight(this.cards) !== isStraight(h2.cards)) { return isStraight(this.cards) > isStraight(h2.cards) }
    if (isThreeOfAKind(this.cards) !== isThreeOfAKind(h2.cards)) { return isThreeOfAKind(this.cards) > isThreeOfAKind(h2.cards) }
    if (isTwoPairs(this.cards, 1) !== isTwoPairs(h2.cards, 1)) { return isTwoPairs(this.cards, 1) > isTwoPairs(h2.cards, 1) }
    if (isTwoPairs(this.cards, 2) !== isTwoPairs(h2.cards, 2)) { return isTwoPairs(this.cards, 2) > isTwoPairs(h2.cards, 2) }
    if (isOnePair(this.cards) !== isOnePair(h2.cards)) { return isOnePair(this.cards) > isOnePair(h2.cards) }
    if (isHighCard(this.cards, 0) !== isHighCard(h2.cards, 0)) { return isHighCard(this.cards, 0) > isHighCard(h2.cards, 0) }
    if (isHighCard(this.cards, 1) !== isHighCard(h2.cards, 1)) { return isHighCard(this.cards, 1) > isHighCard(h2.cards, 1) }
    if (isHighCard(this.cards, 2) !== isHighCard(h2.cards, 2)) { return isHighCard(this.cards, 2) > isHighCard(h2.cards, 2) }
    if (isHighCard(this.cards, 3) !== isHighCard(h2.cards, 3)) { return isHighCard(this.cards, 3) > isHighCard(h2.cards, 3) }

    return false
  }
}

// Comparing hands
// Check for handType
// if this.handType of one is larger than the other one, return 1
// else if this.handType is lower than the other, return -1
// else compare using the following
// if royal flush just compare the totalValue, value is the sum of all card values + suit
// if straigt flush just compare the totalValue, value is the sum of all card values + suit
// if four of a kind, compare value (which is the kind value)
// if full house, compare value (which is the value of the three of a kind)
// if flush, compare value (which is the suit), if same compare each card to each other, starting from high card
// if straight, compare highCard
// if three of a kind, compare value (which is the value of the three of a kind), if same compare the highest card not in the triple
