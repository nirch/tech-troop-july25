const fs = require('fs');


console.log('start');

setTimeout(() => {
  console.log('inside setTimeout')
}, 1000)



// const file = fs.openSync("test.txt", "r")
// let content;
fs.readFile("test.txt", (err, data) => {

  if (err) {
    console.error(err);
    return;
  }
  
  // update Model with data
  // todos.add(todo)
  // refreshUI
  // refreshTodos();
  // updateUi(data);

  // return data;
  console.log(data);
})

console.log('end');
