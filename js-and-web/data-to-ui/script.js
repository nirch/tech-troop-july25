
import { getShoppingList, addItem } from "./model.js";

// Reflects the data into UI - THIS SHOULD BE IN UI MODULE
function refreshShoppingList(shoppingList) {
  const ul = document.querySelector('#shoppingList');
  ul.innerHTML = "";

  for (const item of shoppingList) {
    const newItem = document.createElement('li');
    newItem.className = item.completed ? "completed" : "";
    newItem.textContent = item.name;
    newItem.addEventListener('click', () => {
      item.completed = !item.completed;       // FOUL : export method updates completed
      refreshShoppingList(getShoppingList());
    })
    ul.appendChild(newItem);
  }
}

// CONTROLLER
addEventListener('DOMContentLoaded', ()=> {
  refreshShoppingList(getShoppingList());


  document.querySelector('#btnAdd').addEventListener('click', ()=> {
    const newItemValue = document.querySelector('#inputNew').value;
    addItem(newItemValue);
    refreshShoppingList(getShoppingList());
    document.querySelector('#inputNew').value = '';
  })
})