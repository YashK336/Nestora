import express from "express";

import {
  getNotifications,
  markNotificationRead,
  markAllNotificationsRead,
  deleteNotifications,
} from "../controllers/notificationController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router.use(protect);
router.use(authorize("admin"));

router.get("/", getNotifications);

router.patch(
  "/:id/read",
  markNotificationRead
);

router.patch(
  "/read-all",
  markAllNotificationsRead
);

router.delete(
  "/",
  deleteNotifications
);

export default router;