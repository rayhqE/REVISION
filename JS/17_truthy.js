const userEmail = [3];

if (userEmail) {
  console.log("got user email");
} else {
  console.log("dont have  user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("array is empty");
}

const emptyObj = { a: 12 };
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

//Terniary Operator
// condition ? true : false;

const icedTeaPrice = 80;
icedTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
