// ## Activity 2: Destructuring
//  - Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
//  - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

console.log("Task 3");

let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

console.log("Task 4");

let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
};
let { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);
