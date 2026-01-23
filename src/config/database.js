const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vanshajjyadava_namasteDev:vanshYadav@namastenode.rycanmv.mongodb.net/devBook",
  );
};

connectDB()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.log("Database connection failed !");
  });
