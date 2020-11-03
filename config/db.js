const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log("mongo DB connected");
  } catch (error) {
    console.log(error.message);

    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

//db
//https://cloud.mongodb.com/v2/5f96ce7bf114b91d8197a032#clusters
