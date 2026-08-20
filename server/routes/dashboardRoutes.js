import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";
import { getDashboardStats, getPublicStats, getAnalytics } from "../controllers/dashboardController.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  authorize("admin"),
  getDashboardStats
);

router.get(
  "/public/stats",
  getPublicStats
);

router.get(
  "/analytics",
  protect,
  authorize("admin"),
  getAnalytics
);

export default router;