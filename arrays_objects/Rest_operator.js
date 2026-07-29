// Rest operator - collects remaining elements into an array or object

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2,3,4,5)); // 15

const fruits = ["apple", "banana","cherry", "date"];
const [first, second, ...remainingFruits] = fruits;

console.log(first);//output:apple
console.log(second);// output: banana
console.log(remainingFruits); // output :["cherry","date"]