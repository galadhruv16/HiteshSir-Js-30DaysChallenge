// ## Activity 2: Object Methods
//  - Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
//  - Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

//Task 3
let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: 1997,
};

book.getBookInfo = function () {
  return `${this.title} by ${this.author}`;
};

console.log(book.getBookInfo());

//Task 4
book.updateYear = function (year) {
  this.year = year;
};

book.updateYear(2000);
console.log(book);
