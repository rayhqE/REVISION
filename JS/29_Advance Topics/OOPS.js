const user = {
  username: "furyUser",
  logginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // return "Got user details from Database";
    // return `username:${this.username}`;
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, logginCount, isLoggedIn) {
  // username = username;
  this.username = username;
  this.logginCount = logginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    return `Welcome ${this.username}`;
  };
  return this; //IT IS IMPLICITLY RETURED BY DEFAULT WITHOUT EVEN STATING
}
const userOne = new User("ray_hq3", 12, true);
const userTwo = new User("shiningUser", 30, false);
console.log(userOne.constructor);
// console.log(userTwo.greeting());
