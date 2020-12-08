const express = require("express");
const router = express.Router();

// Restaurant mongoose model
const { model: RestaurantModel } = require("../models/RestaurantModel");

// Get all restaurants
router
  .route("/")
  .get(async (req, res) => {
    const restaurants = await RestaurantModel.find();
    res.json(restaurants);
  })
  .post(async (req, res) => {});

exports.router = router;
