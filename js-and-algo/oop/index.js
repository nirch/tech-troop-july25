
// const john = {
//   name: "John",
//   age: 30,
//   greet: function() {
//     return `Hello, I'm ${this.name}`;
//   },
// }

// const jane = {
//   ...john,
//   name: "Jane",
//   age: 35,
//   city: "..."  
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
  // greet = () => {
  //   return `Hello, I'm ${this.name}`;
  // }
}

const john = new Person("John", 30);
const jane = new Person("Jane", 35);

console.log(john)
console.log(john instanceof Person);

console.log(john.greet());
console.log(jane.greet());



class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    // return `${super.greet()}, your ${this.subject} teacher`
    return "I am a teacher!!!"
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  greet() {
    return `${super.greet()}, student Id: ${this.studentId}`
  }
}

const teacher = new Teacher("Sarah", 50, "Math");
const student = new Student("Mike", 16, "S3332");

console.log(teacher);
console.log(student);
console.log(teacher.greet());

// console.log(teacher instanceof Object)


// This is polymorphism
[teacher, student].forEach(person => {
  console.log(person.greet());
});