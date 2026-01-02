// const body = document.querySelector("body");
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let changeStart;
const changeBgColor = () => {
  document.body.style.backgroundColor = randomColor();
};

document.querySelector("#start").addEventListener("click", () => {
  changeStart = setInterval(changeBgColor, 1000);
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(changeStart);
});
