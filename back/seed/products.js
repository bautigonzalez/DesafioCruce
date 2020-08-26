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

const product4 = {
  name: "Funko POP | Producto 4",
  price: 400.00,
  image: "/images/producto4.png",
  discount: 10
};

const product5 = {
  name: "Funko POP | Producto 5",
  price: 500.00,
  image: "/images/producto5.png"
};

const product6 = {
  name: "Funko POP | Producto 6",
  price: 600.00,
  image: "/images/producto6.png",
};

const product7 = {
  name: "Funko POP | Producto 7",
  price: 700.00,
  image: "/images/producto7.png",
  discount: 10
};

const product8 = {
  name: "Funko POP | Producto 8",
  price: 800.00,
  image: "/images/producto8.png",
  discount: 10
};


log("Seeding product collection...");

Product.insertMany([product1, product2, product3, product4, product5, product6, product7, product8])
.then((products) => {
  products.forEach((product) => {
    log(`${product.name} Producto en stock`);
    console.log(product);
  });

  log("Finalizado");

  process.exit();
});