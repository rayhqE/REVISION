// let score = "34";

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// let num = 33;
// let stringNum = String(num);
// console.log(stringNum);
// console.log(typeof stringNum);

// const name = "Rayyan";
// const repoCount = 50;

// console.log(name + repoCount);
// console.log(`My name is ${name} nd my repo count is ${repoCount}`);

// const gameName = new String("hitesh-hc");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("o"));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const gameName1 = new String("hitesh-hc");
// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);
// const newStringoNE = "     Rayyan     "
// console.log(newStringoNE);
// console.log(newStringoNE.trim());
// const url = "http://hitesh.com/hitesh%20choudhary";
// console.log(url.replace('%20','-'))
// console.log(url.includes("hites%20h"));

// const gameName = new String("d_off_season");
// console.log(gameName.split("_"));

// const myArr = [1, 3, "hello", true];
// const numsArray = [1, 2, 3, 4, 5, 6];
// console.log(numsArray);

// const myHeroes = ["ironman", "superman", "hulk"];
// const myArr2 = new Array(1, 2, 23, 4, 5);

// console.log(myArr2[2]);

// numsArray.push(7);
// numsArray.push(8);
// numsArray.push(9);
// numsArray.pop();
// console.log(numsArray);

// numsArray.unshift(456); //adds to the starting
// console.log(numsArray);
// numsArray.shift(); //remove from the start
// console.log(numsArray);

// const newArr = numsArr.join();
// console.log(numsArr);
// console.log(newArr);

// const jumpArr = ["p", "q", "r", "s"];
// const sampleArr = numsArr.concat(jumpArr);
// console.log(sampleArr.join());

// const numsArr = [1, 2, 3, 4, 5, 6, 7];
// console.log("A", numsArr);
// const n1 = numsArr.slice(1, 3);
// console.log(n1);
// console.log("B", numsArr);
// const n2 = numsArr.splice(1, 3);
// console.log(n2);
// console.log("C", numsArr);

// console.log(Array.from("Rayyan"));
// console.log(Array.from({ name: "Rayyan" }));

// const sample = "rayyan";
// console.log(typeof sample);

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));

const jsUser = {
  name: "Rayyan",
  "full name": "Syed rayyanul Haque",
  age: 21,
  location: "jaipur",
  email: "abc@sample.com",
  isLoggedIn: false,
  lastLoginDays: ["wednesday", "friday"],
};
//console.log(jsUser.lastLoginDays);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// jsUser.greetings = function () {
//   return "sup js user";
// };
// jsUser.greetingsTwo = function () {
//   return `Sup js user,${this.name}`;
// };
// console.log(jsUser.greetings());
// console.log(jsUser.greetingsTwo());

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123hub";
tinderUser.name = "Rayyan";
tinderUser.age = 21;
tinderUser.email = "rayhq";
tinderUser.isLoggedIn = "false";
// console.log(tinderUser);

const sampleUser = {
  name: "dumbo",
  age: "21",
  fullName: {
    firstName: "syed",
    lastName: {
      middleName: "rayyanul",
      surname: "Haque",
    },
  },
  sampleData: ["23", "er", "34"],
};

//console.log(sampleUser.fullName.lastName.surname);
//console.log(sampleUser.sampleData[1]);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
//const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

//console.log(obj3);

const Users = [
  {
    id: 1,
    email: "abc@bmn",
  },
  {
    id: 2,
    email: "sample@mscr",
  },
];

// console.log(Users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

// const repo = {
//   repoName: "ai project",
//   repoCount: 21,
//   repoussage: "weeekly",
// };

// const { repoName: put, repoCount, repoussage: tuf } = repo;
// console.log(cum);
// console.log(tuf);

// function sayMyName() {
//   console.log("R");
//   console.log("A");
//   console.log("Y");
//   console.log("Y");
//   console.log("A");
//   console.log("N");
// }
// sayMyName();

function addTwoNums(n1, n2) {
  // console.log(n1 + n2);

  // let result = n1 + n2;
  // return result;
  return n1 + n2;
}

const result = addTwoNums(2, 4);
// console.log("result:", result);

function loginUser(username = "sam") {
  if (!username) {
    return "Please enter a username!";
  }
  return `${username} just logged in!`;
}
// console.log(loginUser("s"));

function calculateCart(...num1) {
  return num1;
}
//console.log(calculateCart(1, 2, 3, 4));

const user = {
  username: "ray_hq3",
  id: 21,
};
const supplier = {
  username: "janta_trading123",
  id: 32,
};
function handleObj(anyobject) {
  return `Customer is ${anyobject.username} and ID is ${anyobject.id}`;
}

//console.log(handleObj(supplier));
//console.log(handleObj(user));
// console.log(handleObj({ username: "epicCrate45", id: 4324234 }));

const myArray = [233, 433, 543, 5656, 7, 565, 34];
function returnSecondValue(anyArray) {
  return anyArray[1];
}
// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([1111, 2222, 3333, 4444, 5555, 6666]));

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "rbo21";
  function two() {
    // console.log(username);
    const website = "running";
  }
  // console.log(website);
  two();
}
one();

// console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

// addTwo(5);
const addTwo = function (num) {
  return num + 2;
};

const user1 = {
  username: "rayyyan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    // console.log(this);
  },
};

// user1.welcomeMessage();
// user1.username = "tagore";
// user1.welcomeMessage();

function chai() {
  let username = "rayyan";
  // console.log(this.username);
}
chai();

//Arrow Fucntions
const sample = () => {
  let userName = "rayyan";
  // console.log(this.userName);
};
// sample();

// const addNums = (n1, n2) => {
//   return n1 + n2;
// };

const addNums = (n1, n2) => n1 + n2;
const arrowFun = (n1, m2) => ({ usernmae: "rayyan" });
//console.log(arrowFun(3, 2));

const myArrayyy = [1, 2, 3, 4, 5];
myArrayyy.forEach(() => {});

//??????????????????IIFE?????????

// (function chai() {
//   console.log("sup chai");
// })();
// ((drinker, drink) => {
//   console.log(`${drinker} is drinking ${drink}`);
// })("rayyan", "coke");

const temperature = 41;
if (temperature === 41) {
  // console.log("temp less than 50");
} else {
  //console.log("temp is greater than 50");
}

// const score = 1000;
// if (score > 500) {
//   console.log("greater than 500,Grade-A");
// } else if (score > 350) {
//   console.log("greater than 350,Grade-B");
// } else if (score > 250) {
//   console.log("greater than 250,Grade-C");
//}

// const month = "sdsd";
// switch (month) {
//   case "jan":
//     console.log("january");

//     break;
//   case "feb":
//     console.log("febuarary");

//     break;

//   default:
//     console.log("no maatch");

//     break;
// }

// condition ? true : fasle;
//const iceTea = 100;
//iceTea >= 80 ? console.log("greater than 80") : console.log("less than 80");

for (let i = 0; i < 10; i++) {
  const element = i;
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value:${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value:${j}, Outer loop value:${i} `);
    // console.log(i + " * " + j + " = " + i * j);
  }
}

const myArray1 = ["flash", "superman", "batman"];
// console.log(myArray1.length);

for (let index = 0; index < myArray1.length; index++) {
  const element = myArray1[index];
  // console.log(element);
}

for (let i = 0; i <= 20; i++) {
  if (i == 5) break;
  // console.log(i);
}
for (let i = 1; i <= 20; i++) {
  if (i === 5) continue;
  // console.log(i);
}

let i = 0;
while (i <= 20) {
  // console.log(`Value of i is ${i}`);
  i = i + 2;
}

const myArRayy = ["superman", "batman", "flash", "spiderman"];
let arr = 0;
while (arr < myArRayy.length) {
  //console.log(`Value is ${myArRayy[arr]}`);
  arr++;
}

let score = 11;
do {
  // console.log(`score is ${score}`);
  score++;
} while (score <= 10);

/* 1. Write a 'for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai"" Store all teas before "chai" in a new array named selectedTeas`.*/

const sampleArray = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];
for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] === "chai") break;
  selectedTeas.push(sampleArray[i]);
}
// console.log(selectedTeas);

let internet = 0;
while (internet <= 20) {
  // console.log(internet);
  internet++;
}
let straw = 0;
do {
  // console.log(straw);
  straw++;
} while (straw <= 20);

const arrr = [1, 2, 3, 4, 5, 6];
for (const val of arrr) {
  // console.log(val);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") continue;
  // console.log(`Each char is ${greet}`);
}

const myObject = {
  js: "javascript",
  py: "Python",
  rb: "ruby",
  swift: "swift",
};

for (const key in myObject) {
  // console.log(key);
  // console.log(myObject[key]);
  // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const hero = ["2323", "34343", "34343", "44545", "334343"];
// for (const i of hero) {
//   console.log(i);
// }
// for (const key in hero) {
//   console.log(hero[key]);
// }

const samosa = {
  perice: 45,
  taste: "mid",
  location: "raju ka dhaba",
};
for (const key in samosa) {
  // console.log(key);
  // console.log(samosa[key]);
}

const coding = ["js", "ruby", "wert", "p"];
coding.forEach(function (item) {
  // console.log(item);
});

coding.forEach((item) => {
  // console.log(item);
});

// coding.forEach((item) => console.log(item));

function printMe(item) {
  // console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    langName: "Javascript",
    langCode: "js",
  },
  {
    langName: "python",
    langCode: "py",
  },
  {
    langName: "Java",
    langCode: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.langName);
  console.log(item.langCode);
});
