// Primitive

// 7 Types :- String, Number, Boolean, BigInt, Null, Undefinde, Symbol

const name = "Vaibhav" // String
const score = 100  // Number
const scoreValue = 100.3 // Number 

const isLoggedIn = false  // Boolean
const outsideTemp = null // Null 
let userEmail;  // Undefinde

const id = Symbol('123') // Symbole
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 3456543576654356754n;
console.log(typeof BigNumber);



// Reference (Non Primitive)

// Array, Objects, Functions

// Array :-  
const arr = ["Vaibhav", "Pratish", "Jayesh"];
console.log(arr);


// Objects :- 
const obj = {
    name:"vaibhav",
    age:18
}

console.log(obj);

const myFunction = function(){
    console.log("Hellow World ");
}

myFunction();


console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
