// ## Activiy 5 : Loop Control statements
//  - Task 8: WaP to print numbers from 1 to 10 but don't print 5 using continue.
//  - Task 9: WAP to print numbers from 1 to 1o but break the loop when the number 7 comes using break

console.log("Task 8");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("Task 9");

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
