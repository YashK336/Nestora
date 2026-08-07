import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import User from "./models/User.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const admin = await User.findOne({ role: "admin" });

if (!admin) {
  console.log("Admin not found");
  process.exit();
}

admin.email = "newadmin@nestora.com";
admin.password = await bcrypt.hash("newpassword123", 10);

await admin.save();

console.log("Admin updated successfully");

process.exit();