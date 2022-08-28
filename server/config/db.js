const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.DB_URI);

  console.log(
    `MongoDB Connected: ${connection.connection.host}`.green.underline.bold
  );
};

module.exports = connectDB;
