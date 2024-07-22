// ## Activity 3 : Do...While Loop
//  - Task 5: Print numbers 1 to 5
//  - Task 6: Calculate the factorial of a number using do while loop

// Task 5: Print numbers 1 to 5

console.log("Task 5");
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Task 6: Calculate the factorial of a number using do while loop

console.log("Task 6");
let num = 5;
let factorial = 1;
i = 1;

do {
  factorial *= i;
  i++;
} while (i <= num);

console.log(factorial);
