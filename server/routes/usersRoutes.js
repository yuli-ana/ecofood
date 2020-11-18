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

usersRouter.post("/add", async (req, res) => {
  console.log(req.body);
  console.log("successful request");

  const newUser = new User({
    ...req.body,
    dishes: [],
  });

  // try {
  //   const user = await newUser.save();
  //   res.json(user);
  // } catch (err) {
  //   res.status(400).send("Bad request");
  // }

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
