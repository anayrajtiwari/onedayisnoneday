import { Router } from "express";
import { getDiscussions, createDiscussion } from "../controllers/discussionController.js";
import { requireAuth } from "../middleware/supabaseAuth.js";
import rateLimit from "express-rate-limit";

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many thoughts shared too quickly. Take a moment to reflect." }
});

router.get("/", getDiscussions);
router.post("/", limiter, requireAuth, createDiscussion);

export default router;
