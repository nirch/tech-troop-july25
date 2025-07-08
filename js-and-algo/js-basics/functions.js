
// const printHello = function() {

// }

function printHello() {
  console.log("Hello");

  // all function return value
  // by default undefined is returned
  // return undefined;
}

// invoking the printHello function and sending the result to log
console.log(printHello());    // undefined

// here we are sending the function printHello to log
console.log(printHello);

function printName(fname, lname) {
  let greeting = `Hello ${fname} ${lname}`;
  console.log(greeting);

  console.log(arguments);
  if (arguments.length > 2) {
    console.log("and my age is " + arguments[2]);
  }
}

printName("John", "Doe");

let a = "Sarah";
let b = "Doe";

printName(a, b);

// sending less or more params
printName("John");              // Hello John undefined
printName();                    // Hello undefined undefined
printName("John", "Doe", 33);   

// Function Overload
// function createDate(day, month, year) {...}
// function createDate(milliseconds) {...}
// function createDate(string) {...} // "YYYY-DD-MM"
// createDate(2, 3, 2022)
// createDate("2022-02-02")

// JavaScript Overloading
function createDate() {
  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    let milliseconds = arguments[0];
  } else if (arguments.length === 1 && typeof arguments[0] === 'string') {
    let stringFormat = arguments[0];
  } //...
}

function getFullName(fname, lname) {
  return fname + " " + lname;
}

let myName = getFullName("John", "Doe");







