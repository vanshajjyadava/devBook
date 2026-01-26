const express = require("express"); // getting express
const app = express(); // instance of express

const connectDB = require("./config/database");

const User = require("./models/user");

// POST API - signup
app.post("/signup", async (req, res) => {
  // Creating a new "Instance of the User model"
  const user = new User({
    firstName: "Vansh",
    lastName: "Yadav",
    email: "vanshyadav@gmail.com",
    password: "Vansh@123",
    age: 22,
    gender: "Male",
  });

  try {
    await user.save();
    res.send("User added successfully.");
  } catch (err) {
    res.status(400).send("Something went wrong" + err.message);
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
