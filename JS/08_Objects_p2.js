// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Rayyan";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "abc@gmail.com",
  fullName: {
    userfullname: {
      firstName: "Rayyan",
      lastName: "example",
    },
  },
};

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// DATA COMES IN THIS FORM ....FROM THE DATABASE

const users = [
  {
    id: 1,
    email: "abc@123.com",
  },
  {
    id: 2,
    email: "klm@567.com",
  },
];

users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
