const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
require("dotenv").config();

// Connecting to the database
connectDatabase();
// Starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});
