import type { Request, Response, NextFunction } from "express";
import crypto from "crypto";

const adminTokens = new Set<string>();

export function generateToken(): string {
  const token = crypto.randomBytes(32).toString("hex");
  adminTokens.add(token);
  setTimeout(() => adminTokens.delete(token), 24 * 60 * 60 * 1000);
  return token;
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token || !adminTokens.has(token)) {
    res.status(401).json({ success: false, message: "Unauthorized." });
    return;
  }

  next();
}
