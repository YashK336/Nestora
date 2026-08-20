import express from "express";

import {
  login,
  changePassword,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router.post("/login", login);

router.put(
  "/change-password",
  protect,
  authorize("admin"),
  changePassword
);

export default router;