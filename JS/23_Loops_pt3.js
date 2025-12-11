const coding = ["rb", "java", "javascript", "python", "c++"];

const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});

// console.log(values);

//++++ for each loop doesn't return anything +++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((nums) => nums > 4);
// console.log(newNums);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);
