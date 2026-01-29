const express = require("express"); // getting express
const app = express(); // instance of express
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json()); // converts raw JSON text data in the request body into a JavaScript object
app.use(cookieParser());

// POST API - signup
app.post("/signup", async (req, res) => {
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
app.post("/login", async (req, res) => {
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

// GET API - user profile
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error("User does not exits!");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});



connectDB()
  .then(() => {
    console.log("Database connected successfully.");
    // listen on port 7777
    app.listen(7777, () => {
      console.log("Listening to port no. 7777");
    });
  })
  .catch((err) => {
    console.log("Database connection failed !");
  });
