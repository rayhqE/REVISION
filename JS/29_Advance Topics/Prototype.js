const myName = "Rayyan     ";
// console.log(myName.length);
// console.log(myName.trim().length);
//...
// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey Power is ${this.spiderman}`);
  },
};

Object.prototype.rayyan = function () {
  console.log(`Rayyan is present in all object`);
};
Array.prototype.heyRayyan = function () {
  console.log(`Rayyan says Hello!`);
};

// heroPower.rayyan();
// myHeroes.rayyan();
// myHeroes.heyRayyan();
// heroPower.heyRayyan();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

//MAKING CUSTOM METHOD

let anotherUserName = "superSanjay    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True legnth of string is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"rayyan".trueLength();
"icedTea".trueLength();
