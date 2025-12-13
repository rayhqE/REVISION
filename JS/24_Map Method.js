//MAP METHOD
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//.
console.log(
  myNumbers.map((nums) => {
    return nums + 10;
  })
);

//CHAINING IN MAPS...
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  newNums
    .map((nums) => nums * 10)
    .map((nums) => nums + 1)
    .filter((nums) => nums >= 40)
);
