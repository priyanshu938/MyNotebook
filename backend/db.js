const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";//after port number / write databse name to create
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo successfully");
  });
};
module.exports = connectToMongo;
