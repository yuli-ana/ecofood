const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  dishes: [String],
});

const User = mongoose.model("User", userSchema);

// Export mongoose model
module.exports = User;
