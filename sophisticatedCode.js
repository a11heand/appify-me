/*
File: sophisticatedCode.js
Description: This code demonstrates a sophisticated and complex JavaScript program that implements a virtual online store with various functionalities.
*/

// Class representing a Product
class Product {
  constructor(name, category, price, description, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    this.stock = stock;
  }

  updateStock(quantity) {
    this.stock += quantity;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price}`);
    console.log(`Description: ${this.description}`);
    console.log(`Stock: ${this.stock}`);
  }
}

// Product Catalog
const catalog = [
  new Product("Laptop", "Electronics", 999, "High-performance laptop", 10),
  new Product("Smartphone", "Electronics", 699, "Flagship smartphone", 5),
  new Product("Headphones", "Electronics", 199, "Noise-canceling headphones", 8),
  new Product("T-shirt", "Clothing", 29, "Cotton t-shirt", 20),
  new Product("Jeans", "Clothing", 79, "Slim-fit jeans", 15)
];

// Class representing a User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product, quantity) {
    if (product.stock >= quantity) {
      this.cart.push({ product, quantity });
      product.updateStock(-quantity);
      console.log(`${quantity} ${product.name}(s) added to cart.`);
    } else {
      console.log(`${product.name} is out of stock.`);
    }
  }

  removeFromCart(product) {
    const index = this.cart.findIndex(item => item.product === product);
    
    if (index !== -1) {
      const item = this.cart[index];
      product.updateStock(item.quantity);
      this.cart.splice(index, 1);
      console.log(`${item.quantity} ${product.name}(s) removed from cart.`);
    } else {
      console.log(`${product.name} is not in the cart.`);
    }
  }

  displayCart() {
    console.log(`--- ${this.name}'s Cart ---`);
    
    this.cart.forEach(item => {
      const { product, quantity } = item;
      console.log(`Product: ${product.name}`);
      console.log(`Quantity: ${quantity}`);
      console.log(`Price: $${product.price * quantity}`);
      console.log("------------------------");
    });
  }
}

// Sample usage

const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");

user1.addToCart(catalog[0], 2);
user1.addToCart(catalog[1], 1);
user1.addToCart(catalog[3], 3);

user2.addToCart(catalog[3], 2);
user2.addToCart(catalog[4], 1);
user2.removeFromCart(catalog[3]);
user2.removeFromCart(catalog[2]);

console.log("--- Product Catalog Info ---");
catalog.forEach(product => {
  product.displayInfo();
  console.log("------------------------");
});

console.log("--- User Carts ---");
user1.displayCart();
user2.displayCart();
