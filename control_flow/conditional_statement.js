/* Condition statement
Conditional statements are used to perform different actions based on different conditions. The help control the flow of your code based on conditions that evaluate to true or false.
 */

/* if statement
The if statement executes a block of code if a specified condition is true. If the condition evaluates to false, the block of code will not be executed.
syntax:
if (condition) {
  // block of code to be executed if the condition is true
}
*/

let age = 18;
if(age>=18) {
    console.log("You are eligible to vote.");
    console.log(age);
}

//if...else statement
/* The if...else statement executes a block of code if a specified condition is true. If the condition evaluates to false, another block of code will be executed.
syntax:
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
*/


if(age>=20) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}

// if...else if...else statement
/* The if...else if...else statement executes a block of code if a specified condition is true. If the condition evaluates to false, another block of code will be executed. You can have multiple else if statements to check for multiple conditions.
syntax:
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition2 is true
} else {
  // block of code to be executed if both condition1 and condition2 are false
}
*/

let marks = 75;
if(marks>=90) {
    console.log("you got A grade.");
} 
else if(marks>=75) {
    console.log("you got B grade.");
}
else if(marks >= 40) {
    console.log("you pass.");
}
else {
    console.log("you fail.");
}

/*Ternary operator
The ternary operator is a shorthand way of writing an if...else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
syntax:
condition ? value_if_true : value_if_false
*/

let number = 50;
let message = (number >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(message);

/* switch statement
The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches the value of the expression to a case label. If a match is found, the corresponding block of code is executed.
syntax:
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
} */

    let day = 4;
    switch(day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        default:
            console.log("Invalid day"); 
    }