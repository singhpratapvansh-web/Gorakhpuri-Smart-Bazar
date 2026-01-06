const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// ADD PRODUCT (ADMIN)
router.post("/", auth, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

module.exports = router;