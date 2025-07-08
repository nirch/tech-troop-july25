// sort

console.log("Sort Example");
const numArr = [2, 10, 22, -3, 45, 9];

numArr.sort(function (a, b) {
  return a - b;
  // if (a < b) {
  //   return -1
  // } else if (a > b) {
  //   return 1
  // } else {
  //   0
  // }
});
console.log(numArr);

const p1 = {
  fname: "John",
  lname: "Doe",
  age: 55,
};
const p2 = {
  fname: "Sarah",
  lname: "Doe",
  age: 35,
};
const p3 = {
  fname: "Mike",
  lname: "Doe",
  age: 45,
};
const people = [p1, p2, p3];

people.sort(function (a, b) {
  return a.age - b.age;
});
console.log(people);

// forEach

people.forEach(function (person, index) {
  console.log(`${index}: ${JSON.stringify(person)}`);
});

// map
// Creating a new array that is a manipulation of another array

// Create an array of names from an array of people

// without map
const namesArr = [];
for (const person of people) {
  namesArr.push(person.fname + " " + person.lname);
}
console.log(namesArr);

const namesArr2 = people.map(function(person) {
  return person.fname + " " + person.lname;
})

// function map(array, callback) {
//   const outputArr = [];
//   for (const item of array) {
//     outputArr.push(callback(item))
//   }
//   return outputArr;
// }

// Filter
// creates a new array which is filtered based on a rule 

// without filter
const evenArr = [];
for (const num of numArr) {
  if (num % 2 === 0) {
    evenArr.push(num);
  }
}
console.log(evenArr);

const evenArr2 = numArr.filter(function(num) {
  return num % 2 === 0
})
console.log(evenArr2);


// Chaining

// create a name array of people older than 40

const oldNames = people.filter(function(person) {
  return person.age > 40
}).map(function(person) {
  return person.fname + " " + person.lname;
});

console.log(oldNames);











