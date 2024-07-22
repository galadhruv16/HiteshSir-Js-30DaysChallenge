// ## Activity 3 : Arrow Functions
//  - Task 5: Write an arrow function to calculate the sum of two numbers and return the result
//  - Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// Task 5

const sum = (a, b) => a + b;

console.log(sum(5, 10));

// Task 6

const checkCharacter = (string, character) => string.includes(character);

console.log(checkCharacter("Hello", "e"));
console.log(checkCharacter("World", "e"));
console.log(checkCharacter("Good", "d"));
