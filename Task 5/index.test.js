const {
  createDeck,
  shuffleDeck,
  distributeCards,
  isOfKind,
  isStraightHouse,
  isFullHouse,
  isTwoPairs,
} = require("./index");

describe("createDeck", () => {
  test("should create a full deck of cards", () => {
    expect(createDeck().length).toEqual(52);
  });
});

describe("shuffleDeck", () => {
  test("should shuffle a full deck of cards", () => {
    const originalDeck = createDeck();
    const newDeck = shuffleDeck(originalDeck);

    expect(newDeck.length).toEqual(52);
    expect(newDeck).not.toEqual(originalDeck);
  });
});

describe("distributeCards", () => {
  test("should distribute 5 cards to each player", () => {
    const deck = shuffleDeck(createDeck());
    const playerCards = distributeCards(deck);

    expect(playerCards[0].length).toEqual(5);
    expect(playerCards[1].length).toEqual(5);
  });
});

describe("isStraightHouse", () => {
  test("should return true for a straight house of cards", () => {
    expect(isStraightHouse([1, 2, 3, 4, 5])).toEqual(true);
  });

  test("should return false for a non-straight house of cards", () => {
    expect(isStraightHouse([1, 2, 2, 4, 5])).toEqual(false);
  });
});

describe("isFullHouse", () => {
  test("should return true for a full house of cards", () => {
    expect(isFullHouse([1, 2, 1, 2, 1])).toEqual(true);
  });

  test("should return false for a non-full house of cards", () => {
    expect(isStraightHouse([1, 2, 1, 2, 3])).toEqual(false);
  });
});

describe("isOfKind", () => {
  test("should return true for four of kind", () => {
    expect(isOfKind([1, 1, 1, 1, 5], 4)).toEqual(true);
  });

  test("should return false for not four of kind", () => {
    expect(isOfKind([1, 1, 1, 3, 5], 4)).toEqual(false);
  });

  test("should return true for three of kind", () => {
    expect(isOfKind([1, 1, 1, 3, 5], 3)).toEqual(true);
  });

  test("should return false for not three of kind", () => {
    expect(isOfKind([1, 1, 3, 3, 5], 3)).toEqual(false);
  });
});

describe("isTwoPairs", () => {
  test("should return true for 2 pairs of cards", () => {
    expect(isTwoPairs([1, 2, 1, 2, 3])).toEqual(true);
  });

  test("should return false for not 2 pairs of cards", () => {
    expect(isTwoPairs([1, 2, 3, 4, 5])).toEqual(false);
  });
});
