
const math = require('./common-export');
const {add} = require('./common-export');           // destructuring
const {PI} = require('./common-export');


console.log(math.add(3, 5));

console.log(add(3, 5));
