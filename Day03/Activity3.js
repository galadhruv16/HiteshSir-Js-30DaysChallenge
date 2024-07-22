// ## Activity 3: Switch Case
//  - Task 4: WAP that uses a switch case to determine the day of the week based on a number ( 1-7 ) and log the day name to the console.
// - Task 5: WAP that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

// Task 4
let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName);

// Task 5
let score = 75;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(grade);
