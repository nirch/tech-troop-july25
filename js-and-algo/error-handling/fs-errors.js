

const fs = require('fs');

// Error handling in Callback
// const file = fs.open("data.txt", "r", (err, file) => {
//   if (err) {
//     // handle error
//     // console.log(...)
//     // ui.showError();
//     //...
//     // 
//   } 

//   // here file is ok....
//   fs.readFile(file, 'utf8', (err, data) => {

//   })

// });

// console.log('eof');

// console.log('file opened');

try {
  file = fs.openSync("data.txt", "r");

  try {
    const data = fs.readFileSync(file, 'utf8');
    console.log(data);
  } catch(error) {
    console.error("Error in reading the file: " + error.message);
  } finally {
    fs.closeSync(file);
  }

} catch (error) {
  console.error("Error in opening the file: " + error.message);
} 









// /**
//  * 
//  * @param {*} x 
//  * @param {*} y 
//  */
// function blabla(x, y) {

// }