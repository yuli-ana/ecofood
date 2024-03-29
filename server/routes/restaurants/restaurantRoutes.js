const express = require("express");
const router = express.Router();

// Restaurant mongoose model
const RestaurantModel = require("./RestaurantModel");

// Get all restaurants
router
  .route("/")
  .get(async (req, res) => {
    const restaurants = await RestaurantModel.find();
    res.json(restaurants);
  })
  .post(async (req, res) => {});

module.exports = router;
