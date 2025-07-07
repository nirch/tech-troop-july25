// *** Memory Considerations ***

let x = 10;
let y = x;
console.log(y);     // 10

y = 20;
console.log(y);     // 20
console.log(x);     // 10 


let person1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
  address: {
    city: "Tel Aviv"
  }
}

let person2 = person1;
console.log(person2.age);     // 35

person2.age = 80;
console.log(person2.age);     // 80
console.log(person1.age);     // 80

let person3 = {...person1};   // spread operator - shallow copy/clone
person3.age = 100;

// deep clone - to JSON -> parse to Object
let person4 = JSON.parse(JSON.stringify(person1));

console.log(JSON.stringify(person1));



let arr = [2, 4, 2, 1, 2];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
// console.log(arr[-1]);
// arr[-1] = 10;
// console.log(arr);

arr.push(10);

