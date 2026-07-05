import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import discussionRoutes from "./routes/discussionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please slow down." },
});
app.use(globalLimiter);

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/inquiries", inquiryRoutes);
app.use("/api/discussions", discussionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Basic Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Divine", message: "SHRI Ecosystem Backend is live" });
});

export default app;
