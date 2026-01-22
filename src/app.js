const express = require("express"); // getting express

const app = express(); // instance of express

// request handlers
app.use("/test", (req, res) => {
  res.send("Hi, Your server is active on port no. 7777");
});

app.use("/hello", (req, res) => {
  res.send("Hello !!");
});

// listen on port 7777
app.listen(7777, () => {
  console.log("Listening to port no. 7777");
});
