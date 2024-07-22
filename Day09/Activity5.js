// ## Activiy 5 : Event Handling
//  - Task 9: Add a click event listener to a button that changes the text content of a paragraph
//  - Task 10: Add a mouseover event listener to an element that changes its border color.

console.log("Task 9");

let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");

button.addEventListener("click", () => {
  paragraph.textContent = "Button clicked";
});

console.log("Task 10");

let element = document.getElementById("task10");

element.addEventListener("mouseover", () => {
  element.style.borderColor = "red";
});
