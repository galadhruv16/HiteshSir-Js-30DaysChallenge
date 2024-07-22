// ## Activity 3: Array Methods (Intermediate)
//  - Task 7: Use the map method to create a new array where each number is doubled and log the new array.
//  - Task 8: Use the filter method to create a new array with only even numbers and log the new array.
//  - Task 9: Use the reduce method to calculate the sum of all numbers in array and log the result.

//Task 7
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

//Task 8
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

//Task 9
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);
