const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vanshajjyadava_namasteDev:vanshYadav@namastenode.rycanmv.mongodb.net/devBook",
  );
};

module.exports = connectDB;
