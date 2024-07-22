// ## Activity 4: The This Keyword
//  - Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method

let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: 1997,
  getBookInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  getBookTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};

console.log(book.getBookTitleAndYear());
console.log(book.getBookInfo());
