// ## Activity 2: Nested IF-Else 
//  - Task 3: WAP to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
} else {
    if (num2 >= num3) {
        console.log(num2 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
}