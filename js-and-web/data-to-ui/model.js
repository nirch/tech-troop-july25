const shoppingList = [
  {
    id: "111",
    name: "Milk",
    completed: true,
  },
  {
    id: "222",
    name: "Honey",
    completed: false,
  },
  {
    id: "333",
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
