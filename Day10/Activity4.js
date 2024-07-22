// ## Activity 4 : Form events
//  - Task 7: Add a submit event listener to a form that prevents that default submission and logs the form data to the console.
//  - Task 8: Add a change event lsitener to a select dropdown that displays for events from dynamically added child elements

// Task 7

const form = document.getElementById("task7");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(new FormData(form));
});

// Task 8

const select = document.getElementById("task8");

select.addEventListener("change", () => {
  console.log(select.value);
});

