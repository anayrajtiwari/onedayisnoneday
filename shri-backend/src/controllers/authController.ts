import type { Response } from "express";
import type { AuthenticatedRequest } from "../middleware/supabaseAuth.js";

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};
