const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
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
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  passwordHash: String,
  updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);

// Export mongoose model
module.exports = User;
