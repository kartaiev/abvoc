const mongoose = require("mongoose");
const config = require("config");
const url = config.get("MONGO_URI");

if (!url) {
  throw new Error("You must provide a MongoLab URI");
}

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
