import mongoose from "mongoose";

import { appConfig } from "../config/appConfig.js";

const connect = async () => {

  if (mongoose.connection.readyState !== 0) {
    console.log("Already connected to MongoDB");
    return;
  }
  await mongoose
    .connect(appConfig.mongoUrl)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connect;
