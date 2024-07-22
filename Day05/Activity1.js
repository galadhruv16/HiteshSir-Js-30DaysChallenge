// ## Activity 1 : Function Declaration
//  - Task 1: Write a function to check if a number is even or odd and log the result to the console
//  - Task 2: Write a function to calculate the square of a number and return the result

// Task 1
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}
checkEvenOrOdd(7);
checkEvenOrOdd(8);

// Task 2

function calculateSquare(number) {
  return number * number;
}

console.log(calculateSquare(5));
console.log(calculateSquare(10));
