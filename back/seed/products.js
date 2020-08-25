const chalk = require("chalk");
const { Product } = require("../models");
require("../db");

const log = (...args) => console.log(chalk.yellow.bgBlue(...args));

const product1 = {
  name: "Funko POP | Producto 1",
  price: 100.00,
  image: "/images/producto1.png",
  discount: 10
};

const product2 = {
  name: "Funko POP | Producto 2",
  price: 200.00,
  image: "/images/producto2.png"
};

const product3 = {
  name: "Funko POP | Producto 3",
  price: 300.00,
  image: "/images/producto3.png",
  stock: 0
};

log("Seeding product collection...");

Product.insertMany([product1, product2, product3]).then((products) => {
  products.forEach((product) => {
    log(`${product.name} Producto en stock`);
    console.log(product);
  });

  log("Finalizado");

  process.exit();
});