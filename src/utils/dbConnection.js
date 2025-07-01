import mongoose from "mongoose";

import { appConfig } from "../config/appConfig.js";

const connect = async () => {
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
