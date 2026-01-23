const express = require("express"); // getting express

const app = express(); // instance of express



// listen on port 7777
app.listen(7777, () => {
  console.log("Listening to port no. 7777");
});
