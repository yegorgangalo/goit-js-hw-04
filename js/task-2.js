const inventory = {
  items: ['Knife', 'Gas mask'],

  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },

  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};


const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  return action(itemName);
};

const { items, add, remove } = inventory;

console.log(items);
// inventory.add('Medkit');

// console.log("items= ", inventory.items);
// inventory.add("wert");
// console.log(inventory.items);
// inventory.remove("Knife");

invokeInventoryAction('Medkit', add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
console.log(items); // ['Knife', 'Gas mask', 'Medkit'] ???чому так не пропадає один член масиву?