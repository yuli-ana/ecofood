const bcrypt = require("bcrypt");
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
    const body = req.body;

    try {
      const saltRound = 10;

      // Hashed password
      const passwordHash = await bcrypt.hash(body.password, saltRound);

      const user = new UserModel({
        ...req.body,
        reviews: [],
        passwordHash,
      });

      const doc = await user.save();

      res.status(201).json({ data: [doc] });
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

// POST /api/users/login
router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    // Compare passwords
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);
    if (user && user.password === password) {
      res.json({ data: [user] });
    } else {
      res.status(401).json({ message: "unauthorized client" });
    }
  } catch (e) {
    console.log(e);
  }

  // Send 401 status to the client if password and username are invalid
  // 401 Unauthorized - The request requires user authentication
  // if (!(user && passwordCorrect)) {
  //   res.status(401).json({
  //     error: "Invalid username or password",
  //   });
  // }

  // const userForToken = {
  //   username: user.username,
  //   id: user._id,
  // };

  // If password and username are valid, create a new token
  // The token contains the username and the user id in a digitally signed form => userForToken
  // const token = jwt.sign(userForToken, process.env.SECRET);

  // res.status(200).send({ token, name: user.name });
});

exports.router = router;
