// ## Activity 3 : Keyboard Events
//  - Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
//  - Task 6: Add a keyup event listener to an input field that displays the current value in paragraph

// Task 5
const input = document.getElementById("task5");

input.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// Task 6
const paragraph = document.getElementById("task6");

input.addEventListener("keyup", () => {
  paragraph.textContent = input.value;
});
