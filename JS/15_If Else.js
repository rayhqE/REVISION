//if

// const isUserLoggedIn = true;

// if (2 != "2") {
//   console.log("Executed");
// }

// // >,<,>=,<=,==,!=,===

// //if-else
// const temperature = 41;
// if (temperature > 50) {
//   console.log("temperature's less than 50");
// } else {
//   console.log("temp's more than 50");
// }
// console.log("will always execute");

//Scope related if-else info
const score = 200;

if (score > 100) {
  const power = "fly"; //this variable shouldn't be available outside this if-scope.for that we gotta use const
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

// const balance = 800;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("allowed to shop");
}

if (loggedInFromEmail || loggedInFromEmail) {
  console.log("user logged in ");
  
}
