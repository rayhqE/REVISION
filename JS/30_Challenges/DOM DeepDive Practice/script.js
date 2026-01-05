//EXAMPLE 1

document.getElementById("changeTextButton").addEventListener("click", (e) => {
  document.getElementById("myParagraph").textContent = "The button is Clicked!";
});

//EXAMPLE 2
document.getElementById("highlightFirstCity").addEventListener("click", (e) => {
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add("highlight");
});

//EXAMPLE 3
document.getElementById("changeOrder").addEventListener("click", (e) => {
  document.getElementById("coffeeType").textContent = "Espresso";
  document.getElementById("coffeeType").style.backgroundColor = "brown";
  document.getElementById("coffeeType").style.padding = "5px";
  document.getElementById("changeOrder").textContent = "Changed!";
});
//EXAMPLE 4
document.getElementById("addNewItem").addEventListener("click", () => {
  const ul = document.getElementById("shoppingList");
  const newLi = document.createElement("li");
  newLi.textContent = "Chocolate";
  ul.appendChild(newLi);
});

//EXAMPLE 5
document.getElementById("removeLastTask").addEventListener("click", () => {
  document.getElementById("taskList").lastElementChild.remove();
});

//EXAMPLE 6
document.getElementById("clickMeButton").addEventListener("dblclick", () => {
  alert("Button Clicked");
});

//EXAMPLE 7
document.getElementById("teaList").addEventListener("click", (e) => {
  if (e.target && e.target.matches(".teaItem")) {
    e.target.classList.add("highlight");
  }
});
//EXAMPLE 8
document.querySelector("#feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let feedBack = document.getElementById("feedbackInput").value;
  document.getElementById(
    "feedbackDisplay"
  ).textContent = `Feedback is: ${feedBack}`;
  document.getElementById("feedbackDisplay").classList = "highlight";
});

//EXAMPLE 9
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

//EXAMPLE 10
document.getElementById("toggleHighlight").addEventListener("click", () => {
  document.getElementById("descriptionText").classList.toggle("highlight");
});
