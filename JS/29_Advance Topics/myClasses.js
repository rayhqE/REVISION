//ES6

class Users {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new Users("rayhq3", "ray@example.com", "123");

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//BEHIND THE SCENE
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const userTwo = new User("newHorizon", "sup@sample.com", "980");

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());
