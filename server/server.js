const express = require("express");
const app = express();
const restaurantRouter = require("./routes/restaurantRoutes");
const cors = require("cors");
const userRouter = require("./routes/usersRoutes");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use("/api/restaurants", restaurantRouter);
app.use("/api/users", userRouter);

module.exports = app;
