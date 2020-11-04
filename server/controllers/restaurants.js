const data = require("../restaurantsData");
const express = require("express");
const router = express.Router();

router.get("/api/restaurants", (req, res) => {
  res.send("Hello world");
});
