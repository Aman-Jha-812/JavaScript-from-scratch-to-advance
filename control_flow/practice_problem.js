/*
Practice problems

1.Write a program to check if a number is positive,
negative, or zero.
 */
/*
let num = -454;
if(num>0){
    console.log(`${num} is positive number`);
}
else if(num<0){
    console.log(`${num} is negative number`);
}
else{console.log("Number is zero")};

// 2. write a program to print number from 1 to 10 using for loop.

for(let i =1; i<=10;i++){
    console.log(i);
}
*/
// create a simple program that handles a divisions by zero error.

let num =-98
let div = num / 0;
console.log(div);

try{
    let result = 10/ 0; 
    console.log(result)
}catch(error){
    console.log('error', error.message);
}