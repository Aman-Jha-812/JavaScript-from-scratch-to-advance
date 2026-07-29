// problem 1 - filter students by grade

const students = [
    {name:"alice", grade:"A"},
    {name:"bob", grade:"B"},
    {name:"Charlie", grade:"A"}
];

const topStudent = students.filter((students) =>students.grade === 'A');
console.log(topStudent)

//problem 2 - destructure personal information
const person = {name:"john", age: 25, city:"new york"};

const {name,city}=person;
console.log(name,city);

//problem 3 - Use map to create a new array to double element value of original array
const Number = [1,2,3];
const doubled = Number.map((num)=> num*2);
console.log(doubled);

