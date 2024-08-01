const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to create a new product
router.post("/products/create", productController.createProduct);

// Route to list all products
router.get("/products", productController.listProducts);

// Route to delete a product
router.delete("/products/:id", productController.deleteProduct);

// Route to update the quantity of a product
router.post("/products/:id/update_quantity", productController.updateQuantity);

module.exports = router;
