// ## Activity 4 : Modifying Attributes and Classes
//  - Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
//  - Task 8: Add and remove a CSS class to/from an HTML element.

console.log("Task 7");

let img = document.querySelector("img");

img.src = "https://via.placeholder.com/150";

console.log("Task 8");

let element = document.getElementById("task8");

element.classList.add("new-class");

setTimeout(() => {
  element.classList.remove("new-class");
}, 2000);
