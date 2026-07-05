import { Router } from "express";
import rateLimit from "express-rate-limit";
import { login, getStats, getInquiries, getDiscussions, createPost } from "../controllers/adminController.js";
import { requireAdmin } from "../middleware/adminAuth.js";

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many login attempts." },
});

router.post("/login", loginLimiter, login);
router.get("/stats", requireAdmin, getStats);
router.get("/inquiries", requireAdmin, getInquiries);
router.get("/discussions", requireAdmin, getDiscussions);
router.post("/posts", requireAdmin, createPost);

export default router;
