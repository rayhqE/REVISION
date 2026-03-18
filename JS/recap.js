// // // let score = "34";

// // // console.log(typeof score);
// // // console.log(typeof (score));

// // // let valueInNumber = Number(score)
// // // console.log(typeof valueInNumber);

// // // let num = 33;
// // // let stringNum = String(num);
// // // console.log(stringNum);
// // // console.log(typeof stringNum);

// // const name = "Rayyan";
// // const repoCount = 50;

// // // console.log(name + repoCount);
// // // console.log(`My name is ${name} nd my repo count is ${repoCount}`);

// // const gameName = new String("hitesh-hc");
// // console.log(gameName[0]);
// // console.log(gameName.__proto__);

// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.charAt(2));
// // console.log(gameName.indexOf("o"));

// // const newString = gameName.substring(0, 4);
// // console.log(newString);

// // const gameName1 = new String("hitesh-hc");
// // const anotherString = gameName.slice(-8, 4);
// // console.log(anotherString);
// // const newStringoNE = "     Rayyan     "
// // console.log(newStringoNE);
// // console.log(newStringoNE.trim());
// const url = "http://hitesh.com/hitesh%20choudhary";
// // console.log(url.replace('%20','-'))
// // console.log(url.includes("hites%20h"));

// const gameName = new String("d_off_season");
// // console.log(gameName.split("_"));

// // const myArr = [1, 3, "hello", true];
// // const numsArray = [1, 2, 3, 4, 5, 6];
// // console.log(numsArray);

// // const myHeroes = ["ironman", "superman", "hulk"];
// // const myArr2 = new Array(1, 2, 23, 4, 5);

// // console.log(myArr2[2]);

// // numsArray.push(7);
// // numsArray.push(8);
// // numsArray.push(9);
// // numsArray.pop();
// // console.log(numsArray);

// // numsArray.unshift(456); //adds to the starting
// // console.log(numsArray);
// // numsArray.shift(); //remove from the start
// // console.log(numsArray);

// // const newArr = numsArr.join();
// // console.log(numsArr);
// // console.log(newArr);

// // const jumpArr = ["p", "q", "r", "s"];
// // const sampleArr = numsArr.concat(jumpArr);
// // console.log(sampleArr.join());

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

jsUser.greetings = function () {
  return "sup js user";
};
jsUser.greetingsTwo = function () {
  return `Sup js user,${this.name}`;
};
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
