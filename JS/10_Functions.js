function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("Y");
  console.log("Y");
  console.log("A");
  console.log("N");
}
// sayMyName();
function addTwoNumbers(n1, n2) {
  // console.log(n1 + n2);
  // let result = n1+n2; [THIS RESULT IS SCOPED ONLY TO THIS FUNTION AND THE LOWER RESULT IS DIFFERENT FROM THIS.]
  // return result;
  return n1 + n2;
}

const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

//function userLoginMsg(username = "moon") ///// IF U WANT DEFAULT SET TO SOME VALUE /////
function userLoginMsg(username) {
  if (!username) {
    return "Please enter a username";
  }
  return `${username} just logged in `;
}
// console.log(userLoginMsg("ray_hq3"));
console.log(userLoginMsg());
