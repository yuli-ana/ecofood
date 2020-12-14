require("dotenv").config();

// Access environment variables
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

module.exports = { PORT, MONGODB_URI };
