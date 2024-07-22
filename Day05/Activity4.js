// ## Activity 4 : Function parameters and Default Values
//  - Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter
//  - Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// Task 7

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 10));

// Task 8

function greet(name, age = 18) {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(greet("John", 25));
