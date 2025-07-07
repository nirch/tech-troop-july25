// 'use strict'

console.log("Hello JS in Node!");

// Primitive Variables

// Types
// number (3, 3.4, -99.2)
// string ("a", 'aaaaa')
// boolean (true, false)
//
// undefined


// JavaScript - Loosely Typed (Dynamic Type)

let x;          // undefined
x = 5;          // number
x = "Hello";    // string
x = true;       // boolean

console.log(x); // true
console.log(typeof x);    // boolean


// let, var, const
y = 10;
// var y = 10;    // similar as above row
console.log(y);

// var vs. let
// var is ES3 syntax
// let, const is ES6 syntax
// always use let over var

// The main difference scope - var's scope (hoisting) is wider than let
console.log(z);   // undefined (not an error)
var z = 10;

// console.log(w);   // Error
let w = 10;

// var vs. let in blocks

if (true) {
  var a = 10;
  let b = 10;
}

console.log(a);
// console.log(b);      // error

// const
const myConst = 5;   
console.log(myConst);

// myConst = 10;           // error

x = null;               // null is a value
console.log(typeof x);  // object

x = 10;
x += 'bla';
console.log(x);         // '10bla'
console.log(typeof x);  // string

// variables must start with letter or '_' or '$'
// let 1num = 10;             // error 


let person = {
  fname: "John",
  "lname": "Doe",
  age: 35,
  isMale: true,
  address: {
    street: "Dizingoff",
    number: 99,
    city: "Tel Aviv",
    zip: "55383"
  },
  sayName: function() {
    console.log(`My name is ${this.fname} ${this.lname}`);
    // console.log("My name is " + this.fname + " " + this.lname);
  },
  1: 10,
  
}


// access prop/key in object
console.log(person.age);
console.log(person["age"]);

// When to use the dynamic key fetch person["age"]?
// 1) When your key is not a standard JS variable name
console.log(person["1"]);
// 2) When the name of the prop I want to access is dynamic
let propName = "age";
console.log(person[propName]);  // 35

// nested object access
console.log(person.address.city);

// changing/setting value
person.age = 25;

// adding a new key
person.weight = 80;

console.log(person);

person.sayName();


// *** Memory Considerations ***
