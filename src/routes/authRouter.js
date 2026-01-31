const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");

// POST API - signup
authRouter.post("/signup", async (req, res) => {
  try {
    // validate the req.body
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;

    // creating password-hash
    const passwordHash = await bcrypt.hash(password, 10);

    // creating a new "Instance of the User model"
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully.");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// POST API - login
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid creadentials !!");
    }

    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {
      // creating jwt token
      const token = await user.getJWT();
      res.cookie("token", token);
      res.send("Login was successful.");
    } else {
      throw new Error("Invalid credentials !!");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// POST API - logout
authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });

  res.send("logout successful.");
});

module.exports = authRouter;
