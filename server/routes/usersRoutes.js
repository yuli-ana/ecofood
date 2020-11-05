const express = require("express");
const router = express.Router();
const usersData = require("../data/users");

router.get("/", (res, req) => {
  console.log(req);
  res.json(usersData);
});

router.get("/:id", (res, req) => {
  const id = req.params.id;
  const user = usersData.find((user) => user.id === Number(id));
  res.json(user);
});

module.exports = router;
