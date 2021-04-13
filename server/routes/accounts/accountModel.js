const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const accountSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  city: String,
  createDate: { type: Date, default: Date.now },
  role: {
    type: { type: String },
  },
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

accountSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password") || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      return next();
    } catch (e) {
      return next(e);
    }
  } else {
    return next();
  }
});

accountSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Account", accountSchema);
