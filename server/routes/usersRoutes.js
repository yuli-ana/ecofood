const bcrypt = require("bcrypt");
const express = require("express");
const usersRouter = express.Router();

// Restaurant mongoose model
const User = require("../models/User");

// Get list of users
usersRouter.get("/", async (req, res) => {
  console.log("Succesfull request", req);
  const users = await User.find();
  // By default returns status cose 200 success
  res.json(users);
});

// Create a new user
usersRouter.post("/", async (req, res) => {
  const body = req.body;

  const saltRound = 10;

  // Hashed password
  const passwordHash = await bcrypt.hash(body.password, saltRound);

  const newUser = new User({
    ...req.body,
    reviews: [],
    passwordHash,
  });

  // Save user to the collection
  const user = await newUser.save();

  res.json(user);
});

module.exports = usersRouter;
