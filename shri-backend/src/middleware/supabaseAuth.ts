import type { Request, Response, NextFunction } from "express";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

if (!supabaseAdmin) {
  console.warn("[SUPABASE] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Auth middleware will reject all requests.");
}

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

  if (!supabaseAdmin) {
    return res.status(500).json({ success: false, message: "Auth service not configured." });
  }

  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }

  req.user = {
    id: user.id,
    email: user.email ?? "",
    name: user.user_metadata?.name || user.email?.split("@")[0] || "Unknown",
    image: user.user_metadata?.avatar_url ?? null,
  };

  next();
};
