import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { appConfig } from "../config/appConfig.js";

export const generateToken = async (data, expiryTime) => {
  const options = {
    expiresIn: expiryTime ?? "5d",
  };
  return jwt.sign({ ...data }, appConfig.jwtSecret, options);
};

export const decodeToken = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        res.status(401).send({ message: "Not Authorized,No token" });
      }

      const decoded = jwt.verify(token, appConfig.jwtSecret);

      if (decoded) {
        return decoded;
      }

      next();
    } catch (error) {
      res.status(401).send({ message: "Not Authorized" });
    }
  }
  if (!token) {
    res.status(401).send({ message: "Not Authorized,No token" });
  }
};

export const verifyValue = async (value, hashedValue) => {
  return await bcrypt.compare(value, hashedValue);
};
