const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = {
  ace: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
  jack: "11",
  queen: "12",
  king: "13",
};

const createDeck = () => {
  const deck = suits.reduce((acc, suit) => {
    const cardsInSuit = Object.entries(values).map(([key]) => `${suit}_${key}`);
    return [...acc, ...cardsInSuit];
  }, []);

  return deck;
};

const shuffleDeck = (deck) => [...deck].sort(() => Math.random() - 0.5);

const distributeCards = (deck) => {
  const player1 = new Array(5)
    .fill("")
    .map(() => deck.splice(Math.floor(Math.random() * deck.length), 1)[0])
    .map((each) => values[each.split("_")[1]]);

  const player2 = new Array(5)
    .fill("")
    .map(() => deck.splice(Math.floor(Math.random() * deck.length), 1)[0])
    .map((each) => values[each.split("_")[1]]);

  return [player1, player2];
};

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

const isFullHouse = (cards) => {
  let countObj = {};
  for (let x of cards) {
    countObj[x] = (countObj[x] || 0) + 1;
  }
  let card = Object.values(countObj);
  if ((card[0] === 2 && card[1] === 3) || (card[1] === 2 && card[0] === 3)) {
    return true;
  }
  return false;
};

const isStraightHouse = (cards) => {
  let counter = 1;

  cards.forEach((card, index) => {
    const nextCard = cards[index + 1];
    if (nextCard - card === 1) {
      counter++;
    }
  });

  return counter === 5;
};

const isTwoPairs = (cards) => {
  let countObj = {};
  for (let x of cards) {
    countObj[x] = (countObj[x] || 0) + 1;
  }
  let card = Object.values(countObj);
  if (card.filter((x) => x === 2).length == 2) {
    return true;
  } else {
    return false;
  }
};

const gameLogic = (player1Cards, player2Cards) => {
  // check if four of kind for player 1 and player 2
  const isFourOfKindP1 = isOfKind(player1Cards, 4);
  const isFourOfKindP2 = isOfKind(player2Cards, 4);

  if (isFourOfKindP1 && isFourOfKindP2) {
    return "Draw";
  }

  if (isFourOfKindP1 && !isFourOfKindP2) {
    return "Player 1 wins";
  }

  if (!isFourOfKindP1 && isFourOfKindP2) {
    return "Player 2 wins";
  }

  // CODE FOR FULL HOUSE
  const isFullHouseP1 = isFullHouse(player1Cards);
  const isFullHouseP2 = isFullHouse(player2Cards);

  if (isFullHouseP1 && isFullHouseP2) {
    return "Draw";
  }

  if (isFullHouseP1 && !isFullHouseP2) {
    return "Player 1 wins";
  }

  if (!isFullHouseP1 && isFullHouseP2) {
    return "Player 2 wins";
  }

  // check if straight house for player 1 and player 2
  const isStraightHouseP1 = isStraightHouse(player1Cards);
  const isStraightHouseP2 = isStraightHouse(player2Cards);

  if (isStraightHouseP1 && isStraightHouseP2) {
    return "Draw";
  }

  if (isStraightHouseP1 && !isStraightHouseP2) {
    return "Player 1 wins";
  }

  if (!isStraightHouseP1 && isStraightHouseP2) {
    return "Player 2 wins";
  }

  // check if 3 of kind for player 1 and player 2
  const isThreeOfKindP1 = isOfKind(player1Cards, 3);
  const isThreeOfKindP2 = isOfKind(player2Cards, 3);

  if (isThreeOfKindP1 && isThreeOfKindP2) {
    return "Draw";
  }

  if (isThreeOfKindP1 && !isThreeOfKindP2) {
    return "Player 1 wins";
  }

  if (!isThreeOfKindP1 && isThreeOfKindP2) {
    return "Player 2 wins";
  }

  // CODE FOR different matching pairs

  const isTwoPairsP1 = isTwoPairs(player1Cards);
  const isTwoPairsP2 = isTwoPairs(player2Cards);

  if (isTwoPairsP1 && isTwoPairsP2) {
    return "Draw";
  }

  if (isTwoPairsP1 && !isTwoPairsP2) {
    return "Player 1 wins";
  }

  if (!isTwoPairsP1 && isTwoPairsP2) {
    return "Player 2 wins";
  }

  // check if 2 of kind for player 1 and player 2
  const isTwoOfKindP1 = isOfKind(player1Cards, 2);
  const isTwoOfKindP2 = isOfKind(player2Cards, 2);

  if (isTwoOfKindP1 && isTwoOfKindP2) {
    return "Draw";
  }

  if (isTwoOfKindP1 && !isTwoOfKindP2) {
    return "Player 1 wins";
  }

  if (!isTwoOfKindP1 && isTwoOfKindP2) {
    return "Player 2 wins";
  }

  // If all of the above are false: Draw
  if (
    !isFourOfKindP1 &&
    !isFourOfKindP2 &&
    !isFullHouseP1 &&
    !isFullHouseP2 &&
    !isStraightHouseP1 &&
    !isStraightHouseP2 &&
    !isThreeOfKindP1 &&
    !isThreeOfKindP2 &&
    !isTwoPairsP1 &&
    !isTwoPairsP2 &&
    !isTwoOfKindP1 &&
    !isTwoOfKindP2
  ) {
    return "Draw";
  }
};

const game = () => {
  // create a deck of 52 cards
  const deck = createDeck();

  // shuffle the cards in the created deck
  const shuffledDeck = shuffleDeck(deck);

  // distribute the cards among player 1 and player 2
  const [player1Cards, player2Cards] = distributeCards(shuffledDeck);

  const winner = gameLogic(player1Cards, player2Cards);

  console.log(winner);
};

game();

module.exports = {
  createDeck,
  shuffleDeck,
  distributeCards,
  isOfKind,
  isStraightHouse,
  isFullHouse,
  isTwoPairs,
};
