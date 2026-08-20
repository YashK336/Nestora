import express from "express";

import {
  getUsers,
  getUser,
  updateUserRole,
  deleteUser,
  createUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// All user management routes require admin access
router.use(protect, authorize("admin"));

// GET /api/users
router.get("/", getUsers);
router.post("/", protect, authorize("admin"), createUser);
// GET /api/users/:id
router.get("/:id", getUser);

// PATCH /api/users/:id/role
router.patch("/:id/role", updateUserRole);

// DELETE /api/users/:id
router.delete(
  "/:id/",
  protect,
  authorize("admin"),
  deleteUser
);

export default router;