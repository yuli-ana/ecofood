const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },,
  gender: { type: String, required: true },
  phone: { type: Number, min: 10, max: 15 },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  dishes: [String],
  updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// Export mongoose model
module.exports = User;
