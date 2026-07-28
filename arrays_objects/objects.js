// objects - collection of key-value pairs
const student = {
    name: 'ABC',
    age: 25,
    grade: 'A'
};

console.log(student.name);

//object methods & this keyword

/* 
What is this?

It's a reference to the object that the function
is currently attached to or being called from.
Its value depends on how a function is called, not where it's written.

Why is this Important?
It allows functions to be flexible and reusable across different objects.
It helps in accessing properties or methods of the object that
is calling the function.
*/
const person = {
    firstName: 'Aman',
    lastName: 'Kumar',
    fulName(){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fulName()); //Aman Kumar

//this keyword - refers to the object that is calling the method. in above this.firstName refers to person.firstName

console.log(this)

// Arrow function don't have their own this. Instead, they inherit this from the surrounding (lexical) scope.
const person1= {
    firstName: 'Aman',
    lastName: 'Kumar',
    fulName: () =>{
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person1.fulName()); //Aman Kumar

//lexical scope refers to the fact that the value of this (or any variable) in a function is determined by where the function is defined, not where it is called!
