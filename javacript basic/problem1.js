/* 
Problem 1:
write a program to print your name, age,
and favorite color using variables
*/

let name = 'aman'
let age = 20
let favorite = 'yellow'

console.log(name)
console.log(age)
console.log(favorite)

console.log(name,age,favorite)

console.log('My name is :' + name + ', I am ' + age + ' years old and my favorite color is ' + favorite)

console.log(`name: ${name}, age:${age}, favorite color: ${favorite}`)


// disadvantages of js 
let a = 10;
a='hello'
console.log(a) // hello
// js is dynamically typed language, it can change the type of variable at runtime this can lead to unexpected behavior and bugs in the code.