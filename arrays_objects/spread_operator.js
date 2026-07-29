// spread operators - expands elements of an array or object

const arr1 = [1, 2, 3];
//const arr3 = [arr1, 23];
//console.log (arr3);
const arr2 = [...arr1, 3, 4]; // arr1 -copy & values extracted

console.log(arr2);

const obj = {a:1, b:2};
const obj1 = {b:2,c:3};
const obj2 = {a:0, ...obj, ...obj, d:4, c:5}
console.log(obj2);