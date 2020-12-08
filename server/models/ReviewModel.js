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

module.exports = mongoose.model("Review", reviewSchema);
