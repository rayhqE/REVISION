const myArr = [0, 3, 4, true, "Rayyan"];
const numsArr = [0, 1, 2, 3, 4, 5];
const heroesArr = ["thor", "ironman", "batman"];
const arr2 = new Array(1, 3, 4, 5, 4);

// console.log(myArr[4]);

//ARRAY METHODS

// numsArr.push(6);
// numsArr.push(7);
// numsArr.pop()
// numsArr.unshift(9)
// numsArr.shift()
// console.log(numsArr.includes(9));
// console.log(numsArr.indexOf(4));

// const newArr = numsArr.join();
// console.log(numsArr);
// console.log(newArr);

//SLICE AND SPLICE

console.log("A ", numsArr);

const newArr2 = numsArr.slice(1, 3);
console.log(newArr2);

console.log("B ", numsArr);

const newArr3 = numsArr.splice(1, 3);
console.log("C ", numsArr);

console.log(newArr3);
