const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "http://via.placeholder.com/150x150"
  },
  stock: {
    type: Number,
    default: 10
  },
  discount: {
      type: Number,
      default: 0
  }
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;