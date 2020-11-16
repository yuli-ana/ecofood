const mongoose = require("mongoose");
const { Schema } = mongoose;

// Restaurant Schema
const restaurantSchema = new Schema({
  name: String,
  currency: String,
  url: String,
  dishes: [],
});

const Restautrant = mongoose.model("Restaurant", restaurantSchema);

// Export mongoose model
module.exports = Restautrant;
