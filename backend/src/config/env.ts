import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 5000,

  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/marketmentor",

  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
};