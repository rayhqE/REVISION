//THIS IS CALLED GLOBAL SCOPE

// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20; //THIS IS CALLED BLOCK SCOPE
  //  c = 30;
  // console.log("INNER VALUE:", a);
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "John";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}
// one();

if (true) {
  const username = "Hitesh";
  if (username === "Hitesh") {
    const website = " Youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//++++++++INTERESTING+++++++++++++
console.log(addone(5));
function addone(num) {
  return num + 1;
}
addTwo();
const addTwo = function (num) {
  return num + 2;
};
