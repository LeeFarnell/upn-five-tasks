// Task 3 - Create a function to calculate how many times 1000 needs to be halved to be less than 10. You can use any functions you created from previous tasks.
const calculate = () => {
  let times = 0;
  let number = 1000;

  while (number > 10) {
    const newNum = number / 2;
    number -= newNum;
    times += 1;
  }
  console.log(number);
  console.log(times);
};

calculate();
