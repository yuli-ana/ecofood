const express = require("express");
const restaurantRouter = express.Router();
const restaurantsData = require("../data/restaurants");

// Restaurant mongoose model
const Restaurant = require("../models/Restaurants");

restaurantRouter.get("/", (req, res) => {
  res.json(restaurantsData);
});

module.exports = restaurantRouter;
