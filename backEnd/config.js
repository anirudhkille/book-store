import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectDB;
