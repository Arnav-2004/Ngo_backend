import { appConfig } from "../config/appConfig.js";

export const isDevelopment = () => appConfig.nodeEnv === "development";
