const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { Schema } = mongoose;

// Restaurant Schema
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  currency: { type: String, required: true },
  passwordHash: String,
  url: { type: String, required: true },
  dishes: [],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

restaurantSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

restaurantSchema.plugin(uniqueValidator);

// Export mongoose model
module.exports = Restaurant;
