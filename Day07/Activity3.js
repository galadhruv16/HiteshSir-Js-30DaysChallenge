// ## Activity 3: Nested objects
//  - Task 5: Create a nested object representing a library with properties like name and books ( an array of book objects ) , and log the library object to the console.
//  - Task 6: Access and log the name of the library and the titles of all the books in the library.

//Task 5
let library = {
  name: "National Library",
  books: [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  ],
};
console.log(library);

//Task 6
console.log(library.name);
library.books.forEach((book) => {
  console.log(book.title);
});
