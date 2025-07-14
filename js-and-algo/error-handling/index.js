

try {
  const result = JSON.parse('invalid json');
  console.log(result);
} catch(err) {
  console.log(err.message)
}

console.log('eof');

// const x = y;
// console.log(x);

// const num = parseInt('not-a-number');
// num = 5;
// console.log(num);


function getStudentAge(student) {
    // if (!student) {
    //   console.log('....');
    //   // throw 
    // }

    return student.age 
}

function printStudentsAge(students) {
    students.forEach(student => {
        try {
          console.log(getStudentAge(student))
        } catch(err) {
          console.log(err.message);
        }
    });
}

let studentsDummyInput = [
    null,
    { "name": "Koko", "age": "3" },
    { "name": "Momo", "age": 31 },
]
printStudentsAge(studentsDummyInput);



function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch(err) {
    // logging the error
    console.error(err);
    throw err;        // keep propagating (bubble) the error up
  }
}


// ui layer
try {
  parseJSON('invalid');
} catch(error) {
  // show the user the error
}


try {
  let x = y;
} catch (err) {
  console.log(err.name);      // ReferenceError
  console.log(err.message);   // y is not defined...
  console.log(err.stack);     // stack
}






function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }
  return a / b;
}