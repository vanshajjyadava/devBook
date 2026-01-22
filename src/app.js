const express = require("express"); // getting express

const app = express(); // instance of express

app.get("/user", (req, res) => {
  res.send({ firstName: "Vansh", lastName: "Yadav" });
});

app.post("/user", (req, res) => {
  // logic for sign up
  res.send("User added successfully.");
});

app.put("/user", (req, res) => {
  // logic to update the entire user
  res.send("User updated.");
});

app.patch("/user", (req, res) => {
  // logic to update partial data
  res.send("User patched.");
});

app.delete("/user", (req, res) => {
  // logic to delete user
  res.send("User deleted.");
});

// request handlers
app.use("/test", (req, res) => {
  res.send("Hi, Your server is active on port no. 7777");
});

// listen on port 7777
app.listen(7777, () => {
  console.log("Listening to port no. 7777");
});
