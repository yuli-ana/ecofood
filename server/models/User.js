const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: { type: String, unique: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  phone: { type: Number, required: true, minlength: 8 },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  reviews: [],
  passwordHash: String,
});

const User = mongoose.model("User", userSchema);

// Export mongoose model
module.exports = User;
