import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "./models/User.js";
dotenv.config();
const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: "admin@nestora.com",
    });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }
    // Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);
    // Create admin
    const admin = await User.create({
      name: "Admin",
      email: "admin@nestora.com",
      password: hashedPassword,
      role: "admin",
    });
    console.log("✅ Admin Created");
    console.log(admin);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
seedAdmin();