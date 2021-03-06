const mongoose = require("mongoose");
const { Schema } = mongoose;

// Restaurant Schema
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  currency: { type: String, required: true },
  passwordHash: String,
  url: { type: String, required: true },
  dishes: [],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
