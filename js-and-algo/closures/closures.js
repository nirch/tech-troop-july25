

// let x = 10;                 // NodeJS (local) Browser (global)

// function foo() {
//   let y = 20;
//   console.log(x + y);       // 30
// }
// foo();

// console.log(y);             // Reference Error



// function foo() {
//   let y = 20;

//   function innerFoo() {
//     let w = 50;
//     console.log(w + y);       // 70
//   }
//   innerFoo();
// }
// foo();


function foo() {
  let y = 20;

  function innerFoo() {
    let w = 50;
    console.log(w + y);       // 70
    // y = 30;
  }
  // y = 30;
  return innerFoo;
}

// innerFoo();       // Error

// innerFoo();

const myFoo = foo();
myFoo();
myFoo();


function add(x) {
  return function(y) {
    return x + y;
  }
}

console.log(add(5)(2));         // 7

const add5 = add(5);
console.log(add5(2));           // 7






