// ## Activity 5: Enhanced Object Literals
//  - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
//  - Task 9: Create an object with computed property names based on variables and log the object to the console.

console.log("Task 8");

let person = {
  name: "John",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person);


console.log("Task 9");

let key = "stringKey";
let value = "Hello, World!";
let obj = {
  [key]: value,
};

console.log(obj);
