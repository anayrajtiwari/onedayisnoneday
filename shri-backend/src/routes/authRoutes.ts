import { Router } from "express";
import { register, login, googleAuth, verifyEmail, getMe } from "../controllers/authController.js";
import { requireAuth } from "../middleware/supabaseAuth.js";
import rateLimit from "express-rate-limit";

const router = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many authentication requests. Please try again later." },
});

router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.post("/google", authLimiter, googleAuth);
router.post("/verify-email", authLimiter, verifyEmail);
router.get("/me", authLimiter, requireAuth, getMe);

export default router;
