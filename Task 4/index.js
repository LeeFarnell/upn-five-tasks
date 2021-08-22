// Task4 - Create a function that accepts an array of numbers and returns an array that has had all values above a given number removed.
const array = [2, 4, 6, 8, 10];
const int = 7;

const remove = array.filter((number) => number < int);

console.log(remove);
