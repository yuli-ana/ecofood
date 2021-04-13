const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  portionSize: String,
  rating: Number,
  feedback: String,
  dish: { type: Schema.Types.ObjectId, ref: "Dish" },
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Review", reviewSchema);
