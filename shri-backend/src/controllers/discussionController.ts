import type { Response } from "express";
import type { AuthenticatedRequest } from "../middleware/supabaseAuth.js";
import Discussion from "../models/Discussion.js";

export const getDiscussions = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const discussions = await Discussion.find().sort({ timestamp: -1 }).limit(50);
    res.status(200).json({ success: true, data: discussions });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not fetch intentions." });
  }
};

export const createDiscussion = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { content, category } = req.body;
    const discussion = new Discussion({
      author: {
        name: req.user?.name,
        email: req.user?.email,
        image: req.user?.image,
      },
      content,
      category,
    });
    await discussion.save();
    res.status(201).json({ success: true, data: discussion });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not manifest intention." });
  }
};
