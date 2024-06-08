const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user"); // Import the User model

const port = 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Mongoose connection
mongoose.connect("mongodb://localhost:27017/SmartcrazeUser", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Connection error:", error));

// Routes
app.post("/register", async (req, res) => {
  try {
    const { email, username, name } = req.body;

    const newUser = new User({
      email,
      username,
      name
    });

    await newUser.save();
    res.status(201).send({ message: "User data saved successfully" });
    console.log(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error saving user data", error: error.message });
  }
});

// Server startup
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
