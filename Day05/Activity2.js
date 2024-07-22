// ## Activity 2 : Function Expression
//  - Task 3: Write a function expression to find the maximum of 2 numbers and log the result to the console
//  - Task 4: Write a function to concatenate two strings and return the result

// Task 3
const findMax = function (a, b) {
  return a > b ? a : b;
};

console.log(findMax(5, 10));
console.log(findMax(15, 10));

// Task 4
function concatenateStrings(string1, string2) {
  return string1 + " " + string2;
}

console.log(concatenateStrings("Hello", "World"));
console.log(concatenateStrings("Good", "Morning"));
