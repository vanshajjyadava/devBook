const express = require("express"); // getting express
const app = express(); // instance of express
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

app.use(express.json()); // converts raw JSON text data in the request body into a JavaScript object
app.use(cookieParser()); // parses cookies to readable text

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const requestRouter = require("./routes/requestRouter");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

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
