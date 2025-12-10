const coding = ["rb", "java", "javascript", "python", "c++"];

//1st Way:-
// coding.forEach(function (val) {
//   console.log(val);
// });

//2nd Way:-
// coding.forEach((item) => console.log(item));

//3rd Way:-
// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe)

//4th Way:-
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

//Objects in arrays
const myCoding = [
  {
    languageName: "javascript",
    labgyageFileName: ".js",
  },
  {
    languageName: "java",
    labgyageFileName: ".java",
  },
  {
    languageName: "python",
    labgyageFileName: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.labgyageFileName);
});
