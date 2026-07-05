import type { Request, Response } from "express";
import { generateToken } from "../middleware/adminAuth.js";
import Inquiry from "../models/Inquiry.js";
import Discussion from "../models/Discussion.js";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ success: false, message: "Email and password required." });
    return;
  }

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    res.status(401).json({ success: false, message: "Invalid credentials." });
    return;
  }

  const token = generateToken();
  res.json({ success: true, token });
};

export const getStats = async (_req: Request, res: Response) => {
  try {
    const [inquiryCount, discussionCount] = await Promise.all([
      Inquiry.countDocuments(),
      Discussion.countDocuments(),
    ]);
    res.json({ success: true, data: { inquiryCount, discussionCount } });
  } catch {
    res.status(500).json({ success: false, message: "Could not fetch stats." });
  }
};

export const getInquiries = async (_req: Request, res: Response) => {
  try {
    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .select("name email interest message createdAt");
    res.json({ success: true, data: inquiries });
  } catch {
    res.status(500).json({ success: false, message: "Could not fetch inquiries." });
  }
};

export const getDiscussions = async (_req: Request, res: Response) => {
  try {
    const discussions = await Discussion.find()
      .sort({ timestamp: -1 })
      .limit(50);
    res.json({ success: true, data: discussions });
  } catch {
    res.status(500).json({ success: false, message: "Could not fetch discussions." });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { content, category } = req.body;

    if (!content) {
      res.status(400).json({ success: false, message: "Content is required." });
      return;
    }

    const discussion = new Discussion({
      author: {
        name: "SHRI Admin",
        email: ADMIN_EMAIL,
        image: null,
      },
      content,
      category: category || "Announcement",
    });

    await discussion.save();
    res.status(201).json({ success: true, data: discussion });
  } catch {
    res.status(500).json({ success: false, message: "Could not create post." });
  }
};
