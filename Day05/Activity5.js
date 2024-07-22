// ## Activiy 5 : High-Order Functions
//  - Task 9: Write a high-order function that takes a function and a number, and calls the function that many times.
//  - Task 10: Write a higher-order function that takes 2 functions and a value, applies the first function to the value, and then applies the second function to the result.

// Task 9

function callFunctionMultipleTimes(func, number) {
    for (let i = 0; i < number; i++) {
        func();
    }
}
callFunctionMultipleTimes(() => console.log("Hello"), 5);

// Task 10

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

console.log(applyFunctions((x) => x + 1, (x) => x * 2, 3)); 