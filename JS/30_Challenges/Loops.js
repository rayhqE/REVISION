/* 1. Write a 'for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai"" Store all teas before "chai" in a new array named selectedTeas`.*/

const arr = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "chai") {
    break;
  }
  selectedTeas.push(arr[i]);
}
// console.log(selectedTeas);

/* 2.Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
Store the other cities in a new array named visitedCities.*/

const myarr = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < myarr.length; i++) {
  if (myarr[i] === "Paris") {
    continue;
  }
  visitedCities.push(myarr[i]);
}

// console.log(visitedCities);

/* 3.Use a for-of loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found.
Store the numbers before 4 in an array named smallNumbers.*/
const nums = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of nums) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

/*
4. Use a `for-of` loop to iterate through the array 
["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". 
Store the other teas in an array named `preferredTeas`.
*/

const diffTeas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of diffTeas) {
  if (tea === "herbal tea") continue;
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

/*
5. Use a `for-in` loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin" is found and store all previous
cities' populations in a new object named `cityPopulations`.


*/

let allPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopulations = {};

for (const key in allPopulation) {
  if (key === "Berlin") break;
  cityPopulations[key] = allPopulation[key];
  // console.log(cityPopulations[key]);
}
// console.log(cityPopulations);

/*
6. Use a `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new
object named `largeCities`.

let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
};
*/
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (const key in worldCities) {
  if (worldCities[key] < 3000000) continue;
  largeCities[key] = worldCities[key];
}
// console.log(largeCities);

/*
7. Write a `forEach` loop that iterates through the array 
["earl grey", "green tea", "chai", "oolong tea"].
Stop the loop when "chai" is found, and store all previous tea types in an array
named `availableTeas`.
*/
let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let stop = false;
teas.forEach((item) => {
  if (item === "chai") stop = true;
  if (!strop) availableTeas.push(item);
});
// console.log(availableTeas);

/*
8. Write a `forEach` loop that iterates through the array
["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in a new array named `traveledCities`.
*/
let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
myCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array [2, 5, 7, 9].
Skip the value 7 and multiply the rest by 2. Store the results in a new array
named `doubledNumbers`.
*/
let helloNums = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < helloNums.length; i++) {
  if (helloNums[i] === 7) continue;
  doubledNumbers.push(helloNums[i] * 2);
}
// console.log(doubledNumbers);

/*
10. Use a `for-of` loop to iterate through the array 
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/
let chais = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const chai of chais) {
  if (chai.length > 10) break;
  shortTeas.push(chai);
}
console.log(shortTeas);
