// ## Activity 5: Multi Dimensional Array
//  - Task 8: Use a for...in loop to iterate over the properties of the book object and log each property of its value.
//  - Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object

//Task 8
console.log("Task 8");
let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: 1997,
};
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

//Task 9

console.log("Task 9");
console.log(Object.keys(book));
console.log(Object.values(book));
