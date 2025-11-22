//+++++++++++++++++++++++++++++++++PUSH AND CONCAT+++++++++++++++++++++++++++++++++
const marvelHeroes = ["thor", "ironman", "spiderman"];

const dcHeroes = ["superman", "flash", "batman"];

// dcHeroes.push(marvelHeroes);
// console.log(dcHeroes);
// console.log(dcHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// +++++++++++++++++++++++++++++++++SPREAD OPERATOR +++++++++++++++++++++++++++++++++

// const allNewHeroes = [...marvelHeroes,...dcHeroes];
// console.log(allNewHeroes);

//++++++++++++++++++FLAT METHOD+++++++++++++++++++++++++++++++++

// const arr = [4,7,9,1,[1,8,26,2],0,[46,24,[4,3,5,88]]]

// const newArr = arr.flat(Infinity);
// console.log(newArr);

console.log(Array.isArray("Rayyan"));
console.log(Array.from("Rayyan"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
