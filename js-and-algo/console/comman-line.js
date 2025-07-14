
console.log("Arguments: ", process.argv);

// const fname = process.argv[2];
// const age = process.argv[3];

// Destructuring
const [,,fname, age, phone] = process.argv;

console.log(phone);
console.log(`Hello ${fname}, you are ${age} years old`);