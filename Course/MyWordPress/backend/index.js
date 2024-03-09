const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./routes/register.route');

const app = express();

require("dotenv").config();

// CORS Settings
app.use(cors());
app.use((req, res, next) => {
  // Allow requests from all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Define allowed methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Define allowed headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Continue to the next middleware
  next();
});
app.options("*", (req, res) => {
  // Respond to preflight requests
  res.status(200).end();
});

// Routes
app.use(express.json());
app.use('/api/register', register);

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

// Start the server
const PORT = process.env.PORT || 3000;
const URI = process.env.DB_URI;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Failed", err.message));