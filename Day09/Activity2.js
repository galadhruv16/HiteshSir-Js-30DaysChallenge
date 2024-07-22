// ## Activity 2 : Creating and Appending Elements
//  - Task 3: Create a new div element with some text content and append it to the body.
//  - Task 4: Create a new li element and add it to an existing ul list.

console.log("Task 3");

let newDiv = document.createElement("div");
newDiv.textContent = "New div element";
document.body.appendChild(newDiv);

console.log("Task 4");

let newLi = document.createElement("li");
newLi.textContent = "New list item";
let ul = document.querySelector("ul");

ul.appendChild(newLi);
