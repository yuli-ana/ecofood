const bcrypt = require("bcrypt");
const express = require("express");
const usersRouter = express.Router();

// Restaurant mongoose model
const User = require("../models/Users");

// Get list of users
usersRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create a new user
usersRouter.post("/", async (req, res) => {
  const body = req.body;

  const saltRound = 10;

  // Store the hash of the password that is generated with the bcrypt.hash
  const passwordHash = await bcrypt.hash(body.password, saltRound);

  const newUser = new User({
    ...req.body,
    dishes: [],
    passwordHash,
  });

  // Save user to the collection
  const user = await newUser.save();

  res.json(user);
});

usersRouter.post("/:id", async (req, res) => {
  const { userId } = req.params;
  const { size, name, price, id } = req.body;

  console.log("done");

  const user = await User.findById(userId);

  console.log(user);

  user.dishes.push();
});
module.exports = usersRouter;
