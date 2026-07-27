// function declaration

function functionName(){
    // block of code
}

function greet(){
    console.log('Hello world');
}

greet();

function greeting(message){
console.log(message);
}

greeting();
greeting('Hi');

//Function expression

const greet1 = function(){
    console.log('hello');
}

console.log(greet1);
greet1();

const greet2 = function(username){
    console.log('hello', username);
}

greet2('ram');

// arrow function - simplified syntax for function
const add = (a,b) => a+b;

console.log (add(2,5))

// default parameters in function
const greet3 = function(username = 'krishna'){
    console.log('hello', username);
}
greet3();
greet3('ram2');

//Higher-order functions & callbacks
//a function that accepts another function as an argument - higher order function
//let array1 = [1,2];
function processArray(arr, callback){
    for (let i =0; i<arr.length; i++){
        callback(arr[i]);
    }
}
let array1 = [1,2];
processArray(array1, function(num){
    console.log(num * 2);
})

// scope, closure
// scope - Accessibility of variables (global, local & block)
// closure - Function that remembers its outer variable
//let a = 5; // global
function outer(){
    let count = 0;// local

    return function inner(){
        count ++;
        console.log(`Count: ${count}`);
        let x = 3; // block
    };
}

let counter = outer(); // counter is assigned the inner() function with a closure over `count`
counter(); //Logs "Count: 1"
counter();//Logs "Count: 2"

//IIFE (Immediately Invoked Function Expression );
(function(){
    console.log('IEFE');
})();

//Currying
//Currying is the process of transforming a function with multiple arguments into a sequence of function, each taking one argument.

const addNums = a=> b => a+b;
console.log(addNums(5)(3));