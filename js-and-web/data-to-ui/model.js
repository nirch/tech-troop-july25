const shoppingList = [
  {
    name: "Milk",
    completed: true,
  },
  {
    name: "Honey",
    completed: false,
  },
  {
    name: "Bread",
    completed: false,
  }
];

export function getShoppingList() {
  return shoppingList;
  // return [...shoppingList];
}

export function addItem(itemName) {
  shoppingList.push({
    name: itemName,
    completed: false
  })
}

export function deleteItem(itemName) {}
