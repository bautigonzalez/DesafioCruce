const express = require('express');
const router = express.Router();
const { Product } = require("../models")

router.get("/products", (req, res, next)=>{
    Product.find()
     .then(products=>res.json(products))
  })

module.exports = router