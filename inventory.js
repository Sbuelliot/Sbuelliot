// Create a class named Shoes
class Shoes {
  constructor(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
  }
}
// Create 5 instances of the Shoes class and push them to an array
let shoesArray = [];
shoesArray.push(new Shoes("Nike Air Max", "NAM001", 10, 120));
shoesArray.push(new Shoes("Adidas Superstar", "ADS002", 15, 80));
shoesArray.push(new Shoes("Converse All Star", "CAS003", 20, 60));
shoesArray.push(new Shoes("Reebok Classic", "RBC004", 12, 90));
shoesArray.push(new Shoes("Puma Suede", "PMS005", 18, 70));
// A function to search for any shoe within the array
function searchShoe(name) {
  for (let shoe of shoesArray) {
    if (shoe.name === name) {
      return shoe;
    }
  }
  return null;
}
// A function to find the shoe with the lowest value per item
function findLowestValue() {
  let lowestValue = Infinity;
  let lowestShoe = null;
  for (let shoe of shoesArray) {
    if (shoe.valuePerItem < lowestValue) {
      lowestValue = shoe.valuePerItem;
      lowestShoe = shoe;
    }
  }
  return lowestShoe;
}
// A function to find the shoe with the highest value per item
function findHighestValue() {
  let highestValue = -Infinity;
  let highestShoe = null;
  for (let shoe of shoesArray) {
    if (shoe.valuePerItem > highestValue) {
      highestValue = shoe.valuePerItem;
      highestShoe = shoe;
    }
  }
  return highestShoe;
}
// A function to edit any aspect of an instance of the shoes class
function editShoe(name, property, newValue) {
  let shoe = searchShoe(name);
  if (shoe) {
    shoe[property] = newValue;
    return true;
  } else {
    return false;
  }
}
// A function to order all of the objects in ascending order
function sortShoes() {
  shoesArray.sort((a, b) => a.valuePerItem - b.valuePerItem);
}
// A function to display a shoe in a presentable manner
function displayShoe(shoe) {
  console.log(`Name: ${shoe.name}`);
  console.log(`Product Code: ${shoe.productCode}`);
  console.log(`Quantity: ${shoe.quantity}`);
  console.log(`Value per item: ${shoe.valuePerItem}`);
}
// Find the shoe with the lowest value per item
let lowestShoe = findLowestValue();
console.log("Shoe with the lowest value per item:");
displayShoe(lowestShoe);
// Find the shoe with the highest value per item
let highestShoe = findHighestValue();
console.log("Shoe with the highest value per item:");
displayShoe(highestShoe);
// Edit the quantity of the "Nike Air Max" shoe
editShoe("Nike Air Max", "quantity", 5);
// Sort the shoes in ascending order by value per item
sortShoes();
console.log("Sorted shoes:");
for (let shoe of shoesArray) {
  displayShoe(shoe);
}