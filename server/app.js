const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const accountRouter = require("./routes/accounts/accountRoutes");
const restaurantRouter = require("./routes/restaurants/restaurantRoutes");
const usersRouter = require("./routes/users/usersRoutes");
const mongoose = require("mongoose");
// Access to env variables
const config = require("./utils/config");

/* Configurations */
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Express middleware that transforms all requests to a JS object and assigns it to body property on the request

/* Routes */
app.use("/api/account", accountRouter);
app.use("/api/users", usersRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/", express.static(path.join(__dirname, "../build")));

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
  // only add this part if you are using React Router
  app.get("*", (req, res) => {
    console.log(path.join(__dirname + "/build/index.html"));
    res.sendFile(path.join(__dirname + "/build/index.html"));
  });
}

module.exports = app;
