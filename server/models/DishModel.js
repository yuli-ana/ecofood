const mongoose = require("mongoose");
const { Schema } = mongoose;

const dishSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Dish", dishSchema);
