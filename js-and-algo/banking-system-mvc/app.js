

const banking = require('./banking');
const ui = require('./ui');

function handleChoice(choice) {
  switch (choice) {
    case '1':
      handleBalance();
      break;
    default:
      break;
  }
}


function handleBalance() {
  const balance = banking.getBalance();
  ui.displayBalance(balance);
}

function run() {
    // loop
    ui.displayMenu();
    const choice = ui.getMenuChoice();
    handleChoice(choice);
}

run();
