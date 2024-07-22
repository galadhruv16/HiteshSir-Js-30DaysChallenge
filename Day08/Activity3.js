// ## Activity 3: Spread and Rest Operators
//  - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
//  - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

//task 5
console.log("Task 5");

let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5];

console.log(array2);

//task 6
console.log("Task 6");

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
