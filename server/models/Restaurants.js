const mongoose = require("mongoose");
const { Schema } = mongoose;

// Restaurant Schema
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  currency: { type: String, required: true },
  passwordHash: String,
  url: { type: String, required: true },
  dishes: [],
});

const Restautrant = mongoose.model("Restaurant", restaurantSchema);

// Export mongoose model
module.exports = Restautrant;
