const express = require("express");
const usersRouter = express.Router();
const uuid = require("uuid");

// Restaurant mongoose model
const User = require("../models/Users");

// let users = [
//   {
//     id: uuid.v4(),
//     name: "David",
//     email: "dv@gmail.com",
//     details: { age: 23, gender: "male", weight: 67, height: 171 },
//     password: 12345,
//     phone: 111222333,
//   },
//   {
//     id: uuid.v4(),
//     name: "Erica",
//     email: "er@gmail.com",
//     details: { age: 18, gender: "female", weight: 58, height: 160 },
//     password: 54321,
//     phone: 999888777,
//   },
//   {
//     id: uuid.v4(),
//     name: "John",
//     email: "jo@gmail.com",
//     details: { age: 48, gender: "male", weight: 78, height: 164 },
//     password: 19876,
//     phone: 666777444,
//   },
// ];

usersRouter.get("/", (req, res) => {
  res.json(users);
});

usersRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === Number(id));
  res.json(user);
});

usersRouter.post("/", (req, res) => {
  // console.log(req);
  const body = req.body;
  console.log(body, " This is body");

  const user = {
    id: uuid.v4(),
    name: body.name,
    email: body.email,
    phone: body.phone,
    password: body.password,
    weight: body.weight,
    height: body.height,
  };

  users = users.concat(user);

  res.status(200).json(user);
});

module.exports = usersRouter;
