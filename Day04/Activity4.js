// ## Activity 4 : Nested loops
//  - Task 7: print basic pyramid pattern of stars of 5 rows

console.log("Task 7");

let rows = 5;
let output = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    output += "*";
  }
  output += "\n";
}

console.log(output);
