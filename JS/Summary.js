//  Primitive

const { type } = require("express/lib/response");

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 300;

const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2323232323n;

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["ironman", "superman", "shaktiman"];

let data = {
  name: "Rayyan",
  age: 23,
};

const myName = function () {
  console.log("sup peeps");
};

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3
