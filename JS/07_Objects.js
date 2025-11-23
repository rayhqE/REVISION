//SINGLETON
// Object.create

// OBJECT LITERALS

const mySym = Symbol("key1");

const jsUser = {
  name: "Rayyan",
  "full Name": "Syed Rayyanul Haque",
  [mySym]: "newKey1",
  age: 19,
  location: "Greater Noida",
  email: "abc@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "friday", "saturday"],
};
//HOW TO USE SYMBOL
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(typeof mySym);

//FREEZE METHOD
jsUser.email = "example@sample.com";
// Object.freeze(jsUser);
// console.log(jsUser);

//ADDING FUNCTIONS TO OBJECTS

jsUser.greetings = function () {
  console.log("Hello JS user");
};
jsUser.greetingsTwo = function () {
  console.log(`Hello js User, ${this.name}`);
};

console.log(jsUser.greetings());
console.log(jsUser.greetings());

jsUser.greetings();
jsUser.greetingsTwo();
