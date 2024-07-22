// ## Activity 1 : Basic Event Handling
//  - Task 1: Add a click event listener to a button that changes the text content of a paragraph,
//  - Task 2: Add a double click event listener to an image that toggles its visibility.

// Tast 1
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const paragraph = document.querySelector("p");
  paragraph.textContent = "Button clicked!";
});

// Task 2
const image = document.querySelector("img");

image.addEventListener("dblclick", () => {
  image.style.display = image.style.display === "none" ? "block" : "none";
});

