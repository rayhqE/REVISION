const myNums = [1, 2, 3];

//METHOD 1:
// console.log(
//   myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currVal:${currval}`);

//     return acc + currval;
//   }, 0)
// );

//METHOD 2:
// console.log(myNums.reduce((acc, currVal) => acc + currVal, 0));

const shoppingCart = [
  {
    courseName: "js Course",
    price: 999,
  },
  {
    courseName: "python Course",
    price: 999,
  },
  {
    courseName: "mobile dev Course",
    price: 999,
  },
  {
    courseName: "data science  Course",
    price: 999,
  },
];

console.log(shoppingCart.reduce((acc, item) => acc + item.price, 0));
