import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  authorize("admin"),
  getDashboardStats
);

export default router;