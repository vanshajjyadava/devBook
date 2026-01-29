const express = require("express"); // getting express
const app = express(); // instance of express
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json()); // converts raw JSON text data in the request body into a JavaScript object

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

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials !!");
    } else {
      res.send("Login was successful.");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

// GET API - user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const getUser = await User.find({ emailId: userEmail });
    if (!getUser) {
      res.status(404).send("Something went wrong" + err.message);
    } else {
      res.send(getUser);
    }
  } catch (err) {
    res.status(404).send("Something went wrong" + err.message);
  }
});

// GET API - feed
app.get("/feed", async (req, res) => {
  try {
    const feed = await User.find({});

    res.send(feed);
  } catch (err) {
    res.status(400).send("Something went wrong !!");
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
