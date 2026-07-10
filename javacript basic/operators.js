// Arithmetic operators : +, -, *, /, %, ++, --

// Addition (+)

let a = 5+2

// Subtraction (-)
 let s = 5-2

// Multiplication (*)
let m = 5*2

// Division (/)
let d = 5/2

// Modulus (%)
let mod = 5%2   

//comparison operators : ==, ===, !=, !==, >, <, >=, <=
let isEqual = 5 == '5' // true (loose comparison, checks value only)
let isStrictEqual = 5 === '5' // false (strict comparison, checks both value and type)

// not equal (!=)
let isNotEqual = 5 != '5' // false (loose comparison, checks value only)
let isStrictNotEqual = 5 !== '5' // true (strict comparison, checks both value and type)

//logical operators : &&, ||, !
let lop1 = true&&false; // false (logical AND, returns true if both operands are true)
let lop2 = true || false; // true (logical OR, returns true if at least one operand is true)
let lop3 = !true; // false (logical NOT, negates the value of the operand, if true then becomes false otherwise vice versa)


console.log(a, s, m, d, mod, isEqual, isStrictEqual, isNotEqual, isStrictNotEqual, lop1, lop2, lop3)

/* 
Define a variable to check if a person's age is between 18 - 64 or not?
*/

// combining multiple conditions
let age = 85;
let isAdult = age >= 18 && age <= 64; // true if age is between 18 and 64, false otherwise
console.log(isAdult);

/* 
increment : ++

increment operator (++) : increases the value of a variable by 1

syntax :
    pre-increment : ++variable
    post-increment : variable++

pre-increment: Increments the value of the variable before using it in an expression.

post-increment: Increments the value of the variable after using it in an expression.
*/
let x = 5;
//pre-increment
console.log(++x); // 6 (increments x to 6, then prints it)
console.log(x); // 

// post-increment
x = 5;
console.log(x++); // 5 (prints the current value of x, then increments it)

console.log(x); // 6 (prints the incremented value of x)

/*
decrement : --
decrement operator (--) : decreases the value of a variable by 1

syntax :
    pre-decrement : --variable
    post-decrement : variable--

    pre-decrement: Decrements the value of the variable before using it in an expression.
    post-decrement: Decrements the value of the variable after using it in an expression.
 */

    let y = 9;

    console.log(--y); // 8 (decrements y to 8, then prints it)
    console.log(y); // 8 (prints the decremented value of y)

    y = 9;
    console.log(y--); // 9 (prints the current value of y, then decrements it)
    console.log(y); // 8 (prints the decremented value of y)
    

    let a1 = 3;
    let b = ++a1 +2 //pre-increment of a1, so a1 becomes 4, then adds 2 to it, resulting in b = 6
    console.log(a1);
    console.log(b);

    a1 = 3;
    let c = a1++ +2; //post-increment of a1, so adds 2 to the current value of a1 (3), then increments a1 to 4, resulting in c = 5
    console.log(a1);
    console.log(c);

    let p = 5;
    let q = --p + 2; //pre-decrement of p, so p becomes 4, then adds 2 to it, resulting in q = 6
    console.log(p);
    console.log(q);

    p = 5;
    let r = p-- + 2; //post-decrement of p, so adds 2 to the current value of p (5), then decrements p to 4, resulting in r = 7
    console.log(p);
    console.log(r);

/*
increment/Decrement on Non-numeric values
javascript automatically converts non-numeric values to numbers when using increment/decrement operators. If the value cannot be converted to a number, it will result in NaN (Not-a-Number).
*/
    let str = 5;
    str++;
    console.log(str); // 6 (string "5" is converted to number 5, then incremented to 6)

    let bool = true;
    bool++;
    console.log(bool); // 2 (boolean true is converted to number 1, then incremented to 2)

  let notNumber = "hello";
    notNumber++;
    console.log(notNumber); // NaN (string "hello" cannot be converted to a number, resulting in NaN)
    
// increment/Decrement on undefined and null values

let val;
val++;
console.log(val); // NaN (undefined cannot be converted to a number, resulting in NaN)

let nullVal = null;
nullVal++;
console.log(nullVal); // 1 (null is converted to number 0, then incremented to 1)

//multiple operator
let num = 5;
let result = num++ + ++num + num-- + --num; 
// Explanation:
// num++ : uses the current value of num (5) in the expression, then increments it to 6
// ++num : increments num to 7, then uses the new value in the expression
// num-- : uses the current value of num (7) in the expression, then decrements it to 6
// --num : decrements num to 5, then uses the new value in the expression
// result = 5 + 7 + 7 + 5 = 24
console.log(result); // 24  

// real world example of increment/decrement operators

let cartItems = 0;
// user adds an item to the cart
cartItems++;
console.log(cartItems); // 1
// user delete an item from the cart
cartItems--;
console.log(cartItems); // 0

//Array indexing
let fruits = ["apple", "banana", "cherry"];
let index = 0;

// accessing the first element of the array using pre-increment
console.log(fruits[index++]); // "apple" (uses the current value of index (0) to access the first element, then increments index to 1)
console.log(fruits[index]); // "banana" (prints the element at the incremented index)

/*
Best practices for using increment/decrement operators:
use pre-increment/decrement when you need to use the updated value immediately in an expression.
use post-increment/decrement when you need to use the current value in an expression before updating it.
avoid combining increment/decrement operators with other complex expressions to improve code readability and maintainability.
*/
