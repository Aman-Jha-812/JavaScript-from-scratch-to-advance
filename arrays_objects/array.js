const fruits =['Apple', 'Banana', 'Grapes'];
console.log(fruits[1]);

const num = [1,2,3];
//push
num.push(4);

console.log(num);
//pop
num.pop();
console.log(num);

//map() - create a new array by applying a function to each element

const squared = num.map((num1)=> num1* num1);
console.log(squared);

const cube = num.map((num2) => num2*num2*num2)
console.log(cube);

// filter() - filters elements based on a conditions

const ages = [18,20,15,30];
const adult = ages.filter(age => age >= 18);
console.log(adult);

// reduce() - reduces an array to a single value by applying a function
const prices = [100,200,300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);