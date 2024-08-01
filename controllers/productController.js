const Product = require("../models/product");

/**
 * Creates a new product.
 */
exports.createProduct = async (req, res) => {
  try {
    // Destructure name and quantity from the request body.
    const { name, quantity } = req.body;

    // Check if name and quantity are provided.
    if (!name || quantity == null) {
      // If not, return a 400 status with an error message.
      return res.status(400).json({ error: "Name and quantity are required" });
    }

    // Create a new product instance with the provided name and quantity.
    const product = new Product({ name, quantity });

    // Save the product to the database.
    await product.save();

    // Return a 201 status with the created product.
    res.status(201).json({ data: { product } });
  } catch (error) {
    // Log the error and return a 500 status with an error message.
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Lists all products.
 */
exports.listProducts = async (req, res) => {
  try {
    // Query the database for all products.
    const products = await Product.find();

    // Return the list of products with a 200 status.
    res.status(200).json({ data: { products } });
  } catch (error) {
    // Log the error and return a 500 status with an error message.
    console.error("Error listing products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Deletes a product by its ID.
 */
exports.deleteProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters.
    const { id } = req.params;

    // Delete the product from the database using its ID and return the result.
    const result = await Product.findByIdAndDelete(id);

    // If the result is falsy, the product was not found.
    if (!result) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Return a success message with a 200 status code.
    res.status(200).json({ data: { message: "Product deleted successfully" } });
  } catch (error) {
    // Log any errors that occur and return a 500 status code with an error message.
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Updates the quantity of a product by its ID.
 */
exports.updateQuantity = async (req, res) => {
  try {
    // Extract the product ID and number from the request parameters and query.
    const { id } = req.params;
    const { number } = req.query;

    // Check if the number query parameter is provided.
    if (!number) {
      // If not, return a 400 status with an error message.
      return res.status(400).json({ error: "Number query parameter required" });
    }

    // Find the product by its ID.
    const product = await Product.findById(id);

    // Check if the product is found.
    if (!product) {
      // If not, return a 404 status with an error message.
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product's quantity by adding the provided number.
    product.quantity += parseInt(number, 10);

    // Save the updated product to the database.
    await product.save();

    // Return a success message with the updated product and a 200 status code.
    res
      .status(200)
      .json({ data: { product, message: "Updated successfully" } });
  } catch (error) {
    // Log any errors that occur and return a 500 status code with an error message.
    console.error("Error updating product quantity:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
