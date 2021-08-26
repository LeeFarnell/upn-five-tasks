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

  console.log(player1);
  console.log(player2);

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

  console.log(isOfKind(player1, 4));
  console.log(isOfKind(player1, 3));
  console.log(isOfKind(player1, 2));

  console.log(isOfKind(player2, 4));
  console.log(isOfKind(player2, 3));
  console.log(isOfKind(player2, 2));
};

createDeck();

//   // Rules
//   /*
//   hasFourOfAKind = false; //Four of a kind: Four cards of the same rank. COVERED
//   hasThreeOfAKind = false; //Three of a kind:Three cards of the same rank. COVERED
//   hasOnePair = false; //One pair:Two cards of a matching rank. COVERED
//   hasTwoPairs = false; //Two pair:Two cards of a matching rank and another two cards of a different matching rank. COVERED
//   hasFullHouse = false; //Full House:Three cards of the same rank, and two cards of a different matching rank. COVERED
//   hasAStraight = false; //Straight:Five cards in sequence. COVERED
//   */

//   // const findPair = (deck) => {
//     // deck = [1,2,2,3,4]
//     // create a new object deckMap = { }
//     // for each value in deck
//     // deck[value] = deck[value] ? deck[value] + 1 : 1
//     // deckMap = {
//     //   1: 1,
//     //   2: 2,
//     //   3: 1,
//     //   4: 1
//     // }
//     // deckValues = Object.keys(deckMap) // 1, 2, 3, 4

//     /*

//     deckValues.forEach((value) => {
//       valueAmount = deckMap[deckValue]

//       // ASSUMING WERE NOT TRACKING WHERE THERE IS MULTIPLE PAIRS

//       // if our value is { Value: 3, Suit: 'diamonds' } we'd still have a map
//       // EXTRA NOTE / THOUGHT it would be instead
//           // deckMap = {
//           //   '1-diamonds': 1,
//           //   '2-clubs': 2,
//           //   '3-spades': 1,
//           //   '4-hearts': 1
//           // }
//         // Then when we we're checking values etc we'd need to substring the suite etc if we had to deal with the suite
//         // Potentially something with a set?

//       // Four of a kind
//       if (deckMap[deckValue] === 4) {
//         hasFourOfAKind = true
//       }

//       if === 3
//         hasThreeOfAKind = true

//       if === 2
//         haOnePair = true
//     })

//     const pairsArray = deckValues.filter((value) => {
//       return value === 2
//     })

//     if pairsArray.length == 2 ?
//       hasTwoPairs = true

//     hasFullHouse = hasThreeOfAKind && hasOnePair

//     // Figuring out a sequence
//     // e.g. deck = 6, 7, 8, 5, 4
//     // Sort the array so we have deck = 4, 5, 6, 7, 8
//     // const sequenceCounter
//     // deck.forEach((value, index) => {
//       /*
//         // const nextValue = deck[index + 1]
//         if (value - nextValue === -1) {
//           sequenceCounter++
//         }
//       */
//     // })

//   // hasSequence = sequenceCounter === 5

//     */
//   }

//   // const cards = () => {
//   //   if (
//   //     player1[0].Value === player1[1].Value ||
//   //     player1[2].Value ||
//   //     player1[3].Value ||
//   //     player1[4].Value
//   //   ) {
//   //     console.log("Pair");
//   //   } else {
//   //     console.log("Not A Pair");
//   //   }
//   // };
//   // player1.map(cards);
// };
