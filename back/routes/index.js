const express = require('express');
const router = express.Router();
const { Product } = require("../models")

router.get("/products", (req, res, next)=>{
    Product.find()
     .then(products=>res.json(products))
  })

router.get("/products/:id", (req, res, next)=>{
    Product.findById(req.params.id)
     .then(product=>res.json(product))
  })

router.post("/products", (req, res, next)=>{
    Product.create(req.body)
    .then(product=>res.json(product))
  })

router.put("/products/:id", (req, res, next)=>{
  Product.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(()=>Product.findById(req.params.id))
  .then(product=>res.json(product))
})

router.delete("/products/:id", (req, res, next)=>{
  Product.findByIdAndDelete(req.params.id)
  .then(()=>Product.find())
  .then((products)=>res.json(products))
})

module.exports = router