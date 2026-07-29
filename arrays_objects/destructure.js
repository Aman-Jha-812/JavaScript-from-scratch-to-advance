// object destructuring

const user = {
    name1: 'shyam',
    age: 30,
    phone: 888
};
//destructuring of an object
const {name1, phone} = user;
console.log(name1, phone);

//Array destructuring - extracts values from an array into variables

const colors = ['Red', 'Green', 'Blue'];
const [first, third, second] = colors;
console.log(first, second, third);

