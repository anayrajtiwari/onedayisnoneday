import { Router } from "express";
import { createInquiry } from "../controllers/inquiryController.js";
import rateLimit from "express-rate-limit";
import { validate } from "../middleware/validate.js";
import { inquirySchema } from "../schemas/inquirySchema.js";

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many inquiries, please try again later."
  }
});

router.post("/", limiter, validate(inquirySchema), createInquiry);

export default router;
