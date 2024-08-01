const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

/**
 * Defining the Mongoose schema for a Product.
 */

const productSchema = new mongoose.Schema({
  // The unique identifier for the product (auto-incremented)
  _id: { type: Number },

  // The name of the product (required)
  name: { type: String, required: true },

  // The quantity of the product (required)
  quantity: { type: Number, required: true },
});

/* `Mongoose-sequence` plugin to automatically generate and increment the `_id` field for each new
document created based on the `Product` schema. */
productSchema.plugin(AutoIncrement, { inc_field: "_id" });

module.exports = mongoose.model("Product", productSchema);
