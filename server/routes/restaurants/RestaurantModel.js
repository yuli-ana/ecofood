const mongoose = require("mongoose");
const { Schema } = mongoose;

// Restaurant Schema
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  currency: { type: String, required: true },
  location: { type: String, required: true },
  passwordHash: String,
  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish" }],
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
