const user = {
  username: "David",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to Website.`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);

function sample() {
  let username1 = "rayyan";
  console.log(this.username1); //YOU CANNOT ACCESS THIS IN FUNCTIONS.
}
sample();

const chai = () => {
  let username1 = "rayyan";
  console.log(this);
};
chai();

// // const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ({ username: "Gopal" });// U NEED TO WRAP OBJECT WID () TO RETURN IT IN AN ARROW FUNCTION
console.log(addTwo(4, 5));

const myArray = [1, 4, 5, 4, 5];
myArray.forEach(function () {});
myArray.forEach(() => {});
