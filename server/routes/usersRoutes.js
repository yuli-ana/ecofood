const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Restaurant mongoose model
const UserModel = require("../models/UserModel");

router
  .route("/")
  // Get all users
  .get(async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
  })
  // Create a new user
  // POST /api/users/
  .post(async (req, res, next) => {
    try {
      const user = new UserModel({
        ...req.body,
        reviews: [],
      });

      const doc = await user.save();
      res.status(201).json({ data: [doc] });
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

// POST /api/users/login
router.route("/login").post(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      next(new Error("User is not found"));
    } else {
      const match = await user.comparePasswords(password);

      if (match) {
        res.json({ data: [user] });
      } else {
        res.status(401).json({ message: "unauthorized client" });
      }
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

exports.router = router;
