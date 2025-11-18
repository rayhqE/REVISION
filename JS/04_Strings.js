//STRING BASICS
const name = "Rayyan";
const repoCount = 15;

console.log(name + repoCount + "value");

console.log(`My name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("d_off_season");

console.log(gameName[0]);

//STRINGS METHODS
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("e"));
//SUBSTRING
const newString = gameName.substring(0, 4);

console.log(newString);
//SLICE
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
//TRIM
const newStringOne = "   Rayyan  ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "http://hitesh.com/hitesh%20choudhary";
//REPLACE
console.log(url.replace("%20", "-"));
//INCLUDES
console.log(url.includes("rayyan"));

//SPLIT
const words = gameName.split("_");
console.log(words);
