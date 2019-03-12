new Vue({
  el: '#app',
  data: {
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['♥','♦','♠','♣'],
    cards: [],
    suitColor: {
      '♠': 'black',
      '♣': 'black',
      '♦': 'red',
      '♥': 'red',
    },
    shuffleSpeed: 'shuffleMedium',
  },
  created() {
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for (let s = 0; s < this.suits.length; s++) {
        for (let r = 0; r < this.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          }
          this.cards.push(card);
          id++;
        }
      }
    },
    shuffleDeck() {
      // Using the Fisher-Yates algorithm for shuffling the deck in a random way.
      for (let i = this.cards.length - 1; i > 0; i--) {
        // Pick a random element to shuffle by using Math.random
        let randomIndex = Math.floor(Math.random() * i);

        // Set temp to = the value of the current card item
        let temp = this.cards[i];
        // Sets the value of the card item in current index to = item for random index.
        Vue.set(this.cards, i, this.cards[randomIndex]);
        // Sets the value of the array item of randomIndex to = temp variable
        Vue.set(this.cards, randomIndex, temp);
      }
    },
  },
});