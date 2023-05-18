const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://anhph9492:forever9492@cluster0.mb3ej.mongodb.net/", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;
