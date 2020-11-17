const express = require("express");
const usersRouter = express.Router();
const uuid = require("uuid");

// Restaurant mongoose model
const User = require("../models/Users");

// Get list of users
usersRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// usersRouter.get("/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((user) => user.id === Number(id));
//   res.json(user);
// });

usersRouter.post("/", async (req, res) => {
  console.log(req.body);

  const newUser = new User({
    ...req.body,
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(400).send("Bad request");
  }
});

module.exports = usersRouter;
