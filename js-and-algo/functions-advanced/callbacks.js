
function greetUser(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function afterGreeting() {
  console.log('Nice to meet you');
}

greetUser('John', afterGreeting);
// greetUser('John', function() {...});

setTimeout(afterGreeting, 1000);

console.log('eof');


setTimeout(function() {
  console.log('I am async')
}, 1000);


function calculate(num1, num2, operation) {
  console.log(`Calculating: ${num1} and ${num2}`);

  const result = operation(num1, num2);

  console.log('result = ' + result);
}

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b;
}


calculate(5, 3, add);
calculate(5, 3, function(a, b) {
  return a / b;
});
