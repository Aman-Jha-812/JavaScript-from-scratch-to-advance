/*loop
Loop defines a block of code that will be executed as long as a specified condition is true. The loop will continue to execute until the condition evaluates to false. There are several types of loops in JavaScript, including for loops, while loops, and do...while loops.
Loops in javascript are used to execute a block of code repeatedly until a specified condition is met. The most commonly used loops in JavaScript are for loops, while loops, and do...while loops. Each type of loop has its own syntax and use cases.
*/

//for loop - block of code repeatedly...used  when number of iterations is known which means Executes a block of code a specific number of times.

for (let i = 1; i <= 5; i++) {
  console.log("number:" + i);
}

// While loop - block of code repeatedly...used when number of iterations is unknown which means Executes a block of code as long as a specified condition is true.
let i=1;
while(i<=5){
    console.log("while number:" + i);
    i++;
}
 // use case: when the number of iterations is unknown, for example, when reading data from a file or waiting for user input.

 // do...while loop
 /* Similar to the while loop, but the block of code will be executed at least once before the condition is tested. The do...while loop is useful when you want to ensure that the code block is executed at least once, regardless of whether the condition is true or false. */
let j=1;
do {
    console.log("do...while number:" + j);
    j++;
} while (j <= 0);

// use case: when you want to perform an action before checking the condition, for example, when prompting the user for input and validating it. e.g., showing a menu to the user and asking for their choice, and then validating the input before proceeding with the selected option.

//for...in loop - used to iterate over the properties of an object. It allows you to access each property name (key) in the object one by one.
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key + ": " + obj[key]);
} 

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for(let key in person) {
  console.log(key + ": " + person[key]);
}

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//for...of loop - used to iterate over the values of an iterable object, such as an array or a string. It allows you to access each value in the iterable one by one.

const word = "Hello";
for (let char of word) {
  console.log(char);
}

const user = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]);

for(let [key, value] of user) {
    console.log(`${key} : ${value}`)
}

//advanced concepts in loops
// break statement - used to exit a loop prematurely, before the loop condition is false. It can be used to stop the loop when a certain condition is met, or when an error occurs.
/*for(let k =0; k<=10;k++){
    if(k===5) break;
    console.log(k)
}*/

// continue statement - used to skip the current iteration of a loop and move on to the next iteration. It can be used to skip over certain values or conditions in a loop.
for(let k =0; k<=10;k++){
    if(k===5) continue;
    console.log(k)
}

//nested loops - a loop inside another loop. Nested loops can be used to iterate over multi-dimensional arrays or to perform complex operations that require multiple levels of iteration.
for(let a = 1; a <= 3; a++){
    for(let b = 1; b <= 2; b++){
        console.log(`a: ${a}, b: ${b}`);
    } }

/*
Choosing the right loop 
* Use for - when you know the number of iterations.
* Use while - when the number of iterations depends on a condition.
* Use do...while - when the code must execute at least once.
* Use for...in - when you need to iterate over the properties of an object.
* Use for...of - for Arrays, strings, or other iterable objects.
 */