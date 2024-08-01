const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

/**
 * Create and configure an instance of the Express application.
 */
const app = express();

// Set up middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());

/**
 * Set up middleware to define a base URL path "/api" for the routes defined in the `productRoutes` module.
 * Any routes defined in the `productRoutes` module will be accessible under the "/api" path in the application.
 */
app.use("/api", productRoutes);

module.exports = app;
