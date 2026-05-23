import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import inquiryRoutes from "./routes/inquiryRoutes.js";

const app = express();

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Allow CORS from all origins for development/deployment ease, or customize as needed
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/inquiries", inquiryRoutes);

// Basic Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Divine", message: "SHRI Ecosystem Backend is live" });
});

export default app;
