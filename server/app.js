const express = require("express");
const app = express();
const cors = require("cors");
const restaurantRouter = require("./routes/restaurantRoutes");
const usersRouter = require("./routes/usersRoutes");
const mongoose = require("mongoose");
// Access to env variables
const config = require("./utils/config");
const loginRouter = require("./routes/login");

// Connect to MongoDB Atlas
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Succesfully connected to MongoDB`);
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/login", loginRouter);

module.exports = app;
