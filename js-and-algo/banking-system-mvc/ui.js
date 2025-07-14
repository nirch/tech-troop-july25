const prompt = require('prompt-sync')();


function displayMenu() {
  console.log("=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit  ");
}

function getMenuChoice() {
  // loop until input number between 1 - 4
  const input = prompt('Choose option (1 - 4): '); 
  return input;
}

function displayBalance(balance) {
  console.log(`Current balance: ${balance}`);
}

module.exports = {
  displayMenu,
  getMenuChoice,
  displayBalance
}