const express = require("express");
const restaurantRouter = express.Router();
const restaurantsData = require("../data/restaurants");

restaurantRouter.get("/", (req, res) => {
  res.json(restaurantsData);
});

module.exports = restaurantRouter;
