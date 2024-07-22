// ## Activity 2 : Mouse Events
//  - Task 3: Add a mouseover event listener to an element that changes its background color.
//  - Task 4: Add a mouseout event listener to an element that resets its background color.

// Task 3
const element = document.getElementById("task3");

element.addEventListener("mouseover", () => {
  element.style.backgroundColor = "lightblue";
});

// Task 4
element.addEventListener("mouseout", () => {
  element.style.backgroundColor = "white";
});
