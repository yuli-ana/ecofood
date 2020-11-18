const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  phone: String,
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  dishes: [],
  password: String,
  updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// Export mongoose model
module.exports = User;
