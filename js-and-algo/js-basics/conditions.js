
let x = 5;
let y = '5';

if (x == y) {
  console.log('5 == "5"')
}

if (x === y) {
  console.log('5 === "5"')
} else {
  console.log('5 !== "5"')
}

// always use === and !== over == and !=


let p1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
}

let p2 = p1;

if (p1 === p2) {
  // true
}

p2 = {}

p2.fname = p1.fname;
p2.lname = p1.lname;
p2.age = p1.age;

if (p1 === p2) {    // FALSE
}


if (p1.fname === p2.fname &&
    p1.lname === p2.lname &&
    p1.age === p2.age) {            // TRUE

}

if (JSON.stringify(p1) === JSON.stringify(p2)) {

}

// FALSY Value
//  0
//  null
//  undefined
//  ""
//  NaN (let x = 10 / 'a')

let str = ""

if (str) {

} else {
  // you will get here
}


// ? :

let w = x > 10 ? true : false;

let w1;
if (x > 10) {
  w = true;
} else {
  w = false;
}

let value = 0;
let newBool = !!value;



