const express = require("express");
const usersRouter = express.Router();
// const users = require("../data/users");

let users = [
  {
    id: 12345,
    name: "David",
    age: 23,
    weight: 67,
    height: 171,
  },
  {
    id: 84584,
    name: "Erica",
    age: 18,
    weight: 58,
    height: 160,
  },
  {
    id: 56748,
    name: "John",
    age: 48,
    weight: 78,
    height: 164,
  },
];

const generateId = () => {
  const newId =
    users.length > 0 ? Math.max(...users.map((note) => note.id)) : 0;
  return newId + 1;
};

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
    id: generateId(),
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
