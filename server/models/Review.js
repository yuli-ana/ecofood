const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  portionSize: String,
  dishId: String,
  restaurantId: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
