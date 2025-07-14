
let currentBalance = 100;

function getBalance() {
  return currentBalance;
}

function deposit(amount) {
  // input validation

  currentBalance += amount;

  // return value: success/error
}

function withdraw(amount) {
  // input validation
  // - amount is number
  // - amount is not negative
  // - currentBalance - amount > 0

  currentBalance -= amount;

  // return value: {success: true/false, message: "" }
}

function isValidAmount(amount) {

}

module.exports = {
  getBalance,
  deposit,
  withdraw
}

// Test....