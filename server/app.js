const express = require("express");
const app = express();
const cors = require("cors");
const { router: restaurantRouter } = require("./routes/restaurantRoutes");
const { router: usersRouter } = require("./routes/usersRoutes");
const mongoose = require("mongoose");
// Access to env variables
const config = require("./utils/config");

// Connect server to MongoDB Atlas
mongoose
  .connect(config.MONGODB_URI, {
    // configs to fix deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Succesfully connected to MongoDB`);
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

/* Configurations */
app.use(cors());
// Express middleware that transforms all requests to a JS object and assigns it to body property on the request
app.use(express.json());

/* Routes */
app.use("/api/users", usersRouter);
app.use("/api/restaurants", restaurantRouter);

module.exports = app;
