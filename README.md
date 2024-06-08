# Learning Mongoose and Basic Backend Form Handling

Welcome to the **Learning Mongoose and Basic Backend Form Handling** repository! This repository contains a series of tutorials and example code to help you get started with using Mongoose for MongoDB interactions and handling form submissions in a Node.js backend.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Mongoose Basics](#mongoose-basics)
6. [Backend Form Handling](#backend-form-handling)
7. [Running the Project](#running-the-project)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This repository is designed to teach you the basics of using Mongoose, a popular MongoDB ODM (Object Data Modeling) library for Node.js, along with handling form submissions on the backend. By following the examples and tutorials in this repo, you'll learn how to:

- Connect to a MongoDB database using Mongoose
- Define and use Mongoose schemas and models
- Perform CRUD (Create, Read, Update, Delete) operations with Mongoose
- Handle form submissions in a Node.js Express server
- Validate and sanitize form data

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (local or cloud-based instance)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mongoose-backend-form-handling.git
    cd mongoose-backend-form-handling
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Project Structure

Here's an overview of the project's structure:

```bash
mongoose-backend-form-handling/
├── models/
│   └── user.js        # Mongoose schema and model for User
├── routes/
│   └── form.js        # Express routes for form handling
├── views/
│   └── form.ejs       # EJS template for the form
├── .env               # Environment variables
├── app.js             # Main application file
├── package.json       # Project metadata and dependencies
└── README.md          # Project README file






```
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



```
```
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;


```
