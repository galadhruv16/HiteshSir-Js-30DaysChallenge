// ## Activiy 5 : Event Delegation
//  - Task 9: Add a click event listener to a list that logs the text content of the clicked list items using event delegation.
//  - Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

// Task 9
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

// Task 10
const parent = document.getElementById("parent");

parent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.textContent);
  }
});
