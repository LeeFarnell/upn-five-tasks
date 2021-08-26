// Task5 - Create a function to determine the winner of this card game.Two players are dealt five cards from a standard deck. The winner is the player with the best Hand.

const A = 01;
const J = 11;
const Q = 12;
const K = 13;

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [A, 02, 03, 04, 05, 06, 07, 08, 09, 10, J, Q, K];

const player1 = [];
const player2 = [];

const createDeck = () => {
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = values[x];
      deck.push(card);
    }
  }

  const shuffle = (deck) => {
    for (let i = 0; i < 1000; i++) {
      const location1 = Math.floor(Math.random() * deck.length);
      const location2 = Math.floor(Math.random() * deck.length);
      const tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
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

  player1.sort(function (a, b) {
    return a - b;
  });
  player2.sort(function (a, b) {
    return a - b;
  });

  console.log("Player One:", player1);
  console.log("Player Two:", player2);

  const isOfKind = (cards, kind) => {
    const results = cards.reduce((acc, card) => {
      if (acc[card]) {
        acc[card] += 1;
      } else {
        acc[card] = 1;
      }

      return acc;
    }, {});

    return Object.values(results).includes(kind);
  };

  console.log("4 Of A Kind: ", isOfKind(player1, 4));
  console.log("3 Of A Kind: ", isOfKind(player1, 3));
  console.log("One Pair: ", isOfKind(player1, 2));

  console.log("4 Of A Kind: ", isOfKind(player2, 4));
  console.log("3 Of A Kind: ", isOfKind(player2, 3));
  console.log("One Pair: ", isOfKind(player2, 2));

  let sequenceCounter = 1;
  // const test = [5, 6, 7, 8, 9];

  player1.forEach((value, index) => {
    const nextValue = player1[index + 1];
    if (value - nextValue === -1) {
      sequenceCounter++;
    }
  });

  const hasSequence = sequenceCounter === 5;
  console.log("Has A Straght: ", sequenceCounter, hasSequence);
};

createDeck();
