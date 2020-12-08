const bcrypt = require("bcrypt");
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
  passwordHash: { type: String, required: true },
});

userSchema.pre("save", async (next) => {
  const user = this;

  if (user.isModified("password") || user.isNew) {
    try {
      const hash = bcrypt.hash(user.password, 10);
      user.password = hash;
      return next();
    } catch (e) {
      return next(e);
    }
  } else {
    return next();
  }
});

userSchema.methods.comparePasswords = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
