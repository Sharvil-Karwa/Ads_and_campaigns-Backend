const express = require("express");
const Product = require("./models/Product");
const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/products", async (req, res) => {
  const product = new Product({
    icon: req.body.icon,
    title: req.body.title,
    content: req.body.content,
  });
  await product.save();
  res.send(product);
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.send(product);
  } catch {
    res.status(404);
    res.send({ error: "Product doesn't exist!" });
  }
});

router.patch("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (req.body.icon) {
      product.icon = req.body.icon;
    }
    if (req.body.title) {
      product.title = req.body.title;
    }
    if (req.body.content) {
      product.content = req.body.content;
    }
    await product.save();
    res.send(product);
  } catch {
    res.status(404);
    res.send({ error: "Product doesn't exist!" });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Product doesn't exist!" });
  }
});

module.exports = router;
