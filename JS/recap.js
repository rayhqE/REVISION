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

console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
