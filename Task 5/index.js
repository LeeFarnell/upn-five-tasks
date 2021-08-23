// Task5 - Create a function to determine the winner of this card game.Two players are dealt five cards from a standard deck. The winner is the player with the best Hand.

const A = 1;
const J = 11;
const Q = 12;
const K = 13;

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];

const player1 = [];
const player2 = [];

const createDeck = () => {
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }

  console.log(deck);

  const shuffle = (deck) => {
    for (let i = 0; i < 1000; i++) {
      const location1 = Math.floor(Math.random() * deck.length);
      const location2 = Math.floor(Math.random() * deck.length);
      const tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }

    console.log(deck);
  };
  shuffle(deck);

  for (let i = 0; i < 5; i++) {
    player1.push(deck[i]);
    deck.shift();
  }

  for (let i = 0; i < 5; i++) {
    player2.push(deck[i]);
    deck.shift();
  }

  console.log(player1);
  console.log(player2);

  // const cards = () => {
  //   if (
  //     player1[0].Value === player1[1].Value ||
  //     player1[2].Value ||
  //     player1[3].Value ||
  //     player1[4].Value
  //   ) {
  //     console.log("Pair");
  //   } else {
  //     console.log("Not A Pair");
  //   }
  // };
  // player1.map(cards);
};

createDeck();
