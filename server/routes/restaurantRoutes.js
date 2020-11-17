const express = require("express");
const restaurantRouter = express.Router();

// Restaurant mongoose model
const Restaurant = require("../models/Restaurants");

// Get all restaurants
restaurantRouter.get("/", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

module.exports = restaurantRouter;
