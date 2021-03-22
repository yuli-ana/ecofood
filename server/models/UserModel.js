const mongoose = require("mongoose");
const { Schema } = mongoose;

// Restaurant Schema
const userSchema = new Schema({
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  passwordHash: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  account: { type: Schema.Types.ObjectId, ref: "Account" },
  createDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
