import { config } from "dotenv";

config();

export const appConfig = {
  mongoUrl: process.env.MONGO_URL ?? "",
  jwtSecret: process.env.JWT_SECRET ?? "",
  port: process.env.PORT ?? 5000,
  nodeEnv: process.env.NODE_ENV ?? "",
  whiteList: process.env.WHITELIST ?? "",
};
