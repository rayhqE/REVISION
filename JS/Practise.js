// user = {};

// const { fname= "rayyan", age=32, city="patna" } = user;
// console.log(age);

const nums = [1, 2, 3, 4, 5];
for (const num of nums) {
  if (num === 3) {
    continue;
  }
  //   console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
  //   if (greet === " ") continue;
  //   console.log(greet);
}

const user = {
  js: "javascript",
  py: "python",
  rb: "ruby",
};

for (const key in user) {
  //   console.log(user[key]);
}

const myCoding = [
  {
    langaugeName: "javascript",
    langaugeFileName: "js",
  },
  {
    langaugeName: "python",
    langaugeFileName: "py",
  },
  {
    langaugeName: "java",
    langaugeFileName: "java",
  },
];
// myCoding.forEach((item) =>
//   console.log(`${item.langaugeName} & ${item.langaugeFileName}`)
// )

const shoppingCart = [
  {
    courseName: "js Course",
    price: 999,
  },
  {
    courseName: "python Course",
    price: 999,
  },
  {
    courseName: "mobile dev Course",
    price: 999,
  },
  {
    courseName: "data science  Course",
    price: 999,
  },
];

const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTotal);
