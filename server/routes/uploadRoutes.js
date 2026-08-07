import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadImages } from "../controllers/uploadController.js";
import { protect, } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("admin"),
  upload.array("images", 10),
  uploadImages
);

export default router;