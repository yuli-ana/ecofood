const express = require("express");
const router = express.Router();
const restaurantsData = require("../data/restaurants");

router.get("/", (req, res) => {
  res.json(restaurantsData);
});

module.exports = router;
