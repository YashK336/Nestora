import { protect } from "../middleware/authMiddleware.js";
import express from "express";
import { authorize } from "../middleware/authorize.js";
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/propertyController.js";

const router = express.Router();

router.get("/",  getProperties);

router.get("/:id",  getProperty);

router.post("/", protect, authorize("admin"), createProperty);

router.put("/:id", protect, authorize("admin"), updateProperty);

router.delete("/:id", protect, authorize("admin"), deleteProperty);

export default router;