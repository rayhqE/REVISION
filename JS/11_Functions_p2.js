//TAKING MULTIPLE PARAMS IN A FUNCTION
function calculateCartPrice(...nums) {
  return nums;
}
console.log(calculateCartPrice(2, 34, 3, 4, 2, 332, 5));
// ...
// ...
// ...   HOW TO HANDLE OBJECTS IN FUCNTIONS
// ...
// ...
const user = {
  userName: "ray_hq3",
  age: 23,
};

const admin = {
  userName: "John123",
  age: 34,
};

function handleObjects(anyobject) {
  console.log(`Username is ${anyobject.userName} and age is ${anyobject.age}.`);
}
handleObjects(user);
handleObjects(admin);
handleObjects({
  userName: "DogLover43",
  age: 34,
});

// ...
// ...
// ...   HOW TO HANDLE ARRAYS IN FUCNTIONS
// ...
// ...
const myArray = [23, 45, 67, 78, 780];
const sampleArray = ["hereos", "villains", "civillians", "actors"];
function getSecondValue(getArray) {
  return getArray[1];
}
console.log(getSecondValue(myArray));
console.log(getSecondValue(sampleArray));
console.log(getSecondValue([999, 666, 444, 333]));
