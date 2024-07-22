// # Activity 4 : Logical operators
// - Task 11: WAP that uses the && operator to combine 2 conditions and log the result
// - Task 12: WAP that uses the || operator to combine 2 conditions and log the result
// - Task 13: WAP that uses the ! operator to negate a condition and log the result

//Task 11
let num5 = 10;
let num6 = 20;
let num7 = 10;
console.log(num5 < num6 && num5 > num7); //true
console.log(num5 < num6 && num5 < num7); //false

//Task 12
console.log(num5 < num6 || num5 > num7); //true
console.log(num5 > num6 || num5 > num7); //false

//Task 13
console.log(!(num5 < num6)); //false
console.log(!(num5 > num6)); //true\
console.log(!(num5 !== num6)); //false
console.log(!(num5 == num6 && num5 == num7)); //true
console.log(!(num5 == num6 || num5 == num7)); //false
