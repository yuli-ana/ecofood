const express = require("express");
const app = express();
const cors = require("cors");
const restaurantRouter = require("./routes/restaurantRoutes");
const usersRouter = require("./routes/usersRoutes");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/restaurants", restaurantRouter);

module.exports = app;
