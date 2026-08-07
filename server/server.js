import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import propertyRoutes from "./routes/propertyRoutes.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Nestora API is running",
  });
});

app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});