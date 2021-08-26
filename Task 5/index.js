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

  console.log("P1 - 4 Of A Kind: ", isOfKind(player1, 4));
  console.log("P1 - Full House: ", isOfKind(player1, 2 & 3));
  console.log("P1 - 3 Of A Kind: ", isOfKind(player1, 3));
  console.log("P1 - Two Pair: ", isOfKind(player1, 2 & 2));
  console.log("P1 - One Pair: ", isOfKind(player1, 2));

  console.log("P2 - 4 Of A Kind: ", isOfKind(player2, 4));
  console.log("P2 - Full House: ", isOfKind(player2, 2 & 3));
  console.log("P2 - 3 Of A Kind: ", isOfKind(player2, 3));
  console.log("P2 - Two Pair: ", isOfKind(player2, 2 & 2));
  console.log("P2 - One Pair: ", isOfKind(player2, 2));

  let p1SequenceCounter = 1;
  let p2SequenceCounter = 1;

  player1.forEach((value, index) => {
    const nextValue = player1[index + 1];
    if (value - nextValue === -1) {
      p1SequenceCounter++;
    }
  });

  const p1HasSequence = p1SequenceCounter === 5;
  console.log("P1 - Has A Straght: ", p1SequenceCounter, p1HasSequence);

  player2.forEach((value, index) => {
    const nextValue = player2[index + 1];
    if (value - nextValue === -1) {
      p2SequenceCounter++;
    }
  });

  const p2HasSequence = p2SequenceCounter === 5;
  console.log("P2 - Has A Straght: ", p2SequenceCounter, p2HasSequence);
};

createDeck();
