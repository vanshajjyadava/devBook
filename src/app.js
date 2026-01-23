const express = require("express"); // getting express

const app = express(); // instance of express

// method-agnostic middleware
app.use("/", (req, res, next) => {
  console.log("I am a method-agnostic middleware.");
  next();
});

// request handlers
app.get("/user", (req, res, next) => {
  res.send("Route handler 1.");
  //next();
});

app.get("/user/1", (req, res, next) => {
  res.send("Route handler 2.");
});

// listen on port 7777
app.listen(7777, () => {
  console.log("Listening to port no. 7777");
});
