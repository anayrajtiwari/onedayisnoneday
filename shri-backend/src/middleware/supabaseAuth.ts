import type { Request, Response, NextFunction } from "express";
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const JWT_SECRET: string = process.env.JWT_SECRET || "shri_jwt_secret_key_2026_safe";

const supabaseAdmin = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    image: string | null;
  };
}

export const requireAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Missing or invalid authorization header." });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Invalid authorization token format." });
  }

  // 1. First try verifying custom JWT token
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as unknown as { id: string; email: string };
    if (decoded && decoded.email) {
      const dbUser = await User.findOne({ email: decoded.email.toLowerCase() });
      if (dbUser) {
        if (!dbUser.isEmailVerified && dbUser.provider === "email") {
          return res.status(403).json({
            success: false,
            code: "EMAIL_NOT_VERIFIED",
            message: "Email address not verified.",
          });
        }

        req.user = {
          id: String(dbUser._id),
          email: dbUser.email,
          name: dbUser.name,
          image: dbUser.avatarUrl || null,
        };
        return next();
      }
    }
  } catch (err) {
    // Token is not a custom JWT, fallback to Supabase token verification below
  }

  // 2. Fallback to Supabase token verification
  if (supabaseAdmin) {
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
    if (!error && user && user.email) {
      const normalizedEmail = user.email.toLowerCase();
      const dbUser = await User.findOne({ email: normalizedEmail });

      if (!dbUser) {
        return res.status(403).json({
          success: false,
          code: "USER_NOT_REGISTERED",
          message: "User not registered in community database.",
        });
      }

      req.user = {
        id: user.id,
        email: normalizedEmail,
        name: dbUser.name || user.user_metadata?.name || normalizedEmail.split("@")[0],
        image: dbUser.avatarUrl || user.user_metadata?.avatar_url || null,
      };
      return next();
    }
  }

  return res.status(401).json({ success: false, message: "Invalid or expired authentication token." });
};
