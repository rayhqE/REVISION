//FOR OF:-
// .
// .
// .
// ["", "", "", ""]
// [({}, {}, {}, {}, {})];

// let arr = [1, 2, 3, 4, 5, 6];
// for (const val of arr) {
//   console.log(val);
// }

let greetings = "Hello World!";
for (const greet of greetings) {
  // if(greet == " ")continue;
  // console.log(`Each Char is ${greet}`);
}

//Maps
const countryCodes = new Map();
countryCodes.set("IN", "India");
countryCodes.set("USA", "United states of America");
countryCodes.set("FR", "France");
countryCodes.set("GR", "Germany");
console.log(countryCodes);

for (const [key, value] of countryCodes) {
  // console.log(key);
  // console.log(value);
  // console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "COD",
  game3: "RDR",
};
for (const [key, val] of myObject) {
  console.log(key, ":-", value);
}
