const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

/**
 * The `connectDatabase` function connects to a MongoDB database using the MONGO_URI environment
 * variable.
 */
const connectDatabase = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDatabase;
