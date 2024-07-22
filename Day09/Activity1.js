// ## Activity 1 : Selecting and Manipulating Elements
//  - Task 1: Select an HTML element by its ID and change its text content.
//  - Task 2: Select an HTML element by its class and change its background color.

// Task 1
console.log("Task 1");

let elementById = document.getElementById("task1");
elementById.textContent = "Element selected by ID";

// Task 2
console.log("Task 2");

let elementsByClass = document.getElementsByClassName("task2");
for (let element of elementsByClass) {
  element.style.backgroundColor = "lightblue";
}
