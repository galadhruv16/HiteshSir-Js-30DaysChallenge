// ## Activity 3 : Removing elements
//  - Task 5: Select an HTML element and remove it from the DOM
//  - Task 6: Remove the last child of a specific HTML element.

console.log("Task 5");

let elementToRemove = document.getElementById("task5");
elementToRemove.remove();

console.log("Task 6");

let lastChild = document.querySelector("ul").lastElementChild;

if (lastChild) {
  lastChild.remove();
} else {
  console.log("No child to remove");
}
