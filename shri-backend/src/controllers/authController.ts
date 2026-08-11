import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { User, type IUser } from "../models/User.js";
import { createClient } from "@supabase/supabase-js";
import type { AuthenticatedRequest } from "../middleware/supabaseAuth.js";

const JWT_SECRET = process.env.JWT_SECRET || "shri_jwt_secret_key_2026_safe";

const supabaseAdmin = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

// REGISTER / SIGNUP
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 1. Check if user exists in DB
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        code: "USER_ALREADY_EXISTS",
        message: "An account with this email already exists in the community. Please sign in.",
      });
    }

    // 2. Hash Password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 3. Generate Email Verification Token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    let supabaseUid: string | undefined = undefined;

    // 4. Trigger Supabase auth signup if configured
    if (supabaseAdmin) {
      const { data } = await supabaseAdmin.auth.signUp({
        email: normalizedEmail,
        password: password,
        options: { data: { name } },
      });
      if (data?.user) {
        supabaseUid = data.user.id;
      }
    }

    // 5. Create User Record in Database
    const userObj: Record<string, any> = {
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      provider: "email",
      isEmailVerified: false,
      verificationToken,
      verificationTokenExpires,
    };

    if (supabaseUid) {
      userObj.supabaseUid = supabaseUid;
    }

    const newUser = (await User.create(userObj)) as IUser;

    return res.status(201).json({
      success: true,
      message: "Registration successful! A verification email has been sent. Please verify your email before logging in.",
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isEmailVerified: newUser.isEmailVerified,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Registration failed";
    console.error("[AUTH REGISTER ERROR]:", error);
    return res.status(500).json({ success: false, message });
  }
};

// LOGIN / SIGNIN (STRICT VERIFICATION)
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 1. STRICT CHECK: User must exist in registered community database
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(403).json({
        success: false,
        code: "USER_NOT_REGISTERED",
        message: "Account not registered in the SHRI community database. Please register first.",
      });
    }

    // 2. STRICT CHECK: Email Verification
    if (!user.isEmailVerified && user.provider === "email") {
      // Check if Supabase confirmed the user
      if (supabaseAdmin && user.supabaseUid) {
        const { data: suUser } = await supabaseAdmin.auth.admin.getUserById(user.supabaseUid);
        if (suUser?.user?.email_confirmed_at) {
          user.isEmailVerified = true;
          await user.save();
        }
      }

      if (!user.isEmailVerified) {
        return res.status(403).json({
          success: false,
          code: "EMAIL_NOT_VERIFIED",
          message: "Your email address is not verified yet. Please check your inbox and verify your email.",
        });
      }
    }

    // 3. Password Verification
    if (user.passwordHash) {
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials. Please check your password.",
        });
      }
    }

    // 4. Generate JWT Session Token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Welcome back to the SHRI Community!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        avatarUrl: user.avatarUrl,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Login failed";
    console.error("[AUTH LOGIN ERROR]:", error);
    return res.status(500).json({ success: false, message });
  }
};

// GOOGLE AUTH & USER SYNC
export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { email, name, avatarUrl, supabaseUid, mode } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Google user email is required." });
    }

    const normalizedEmail = email.toLowerCase().trim();

    let user = await User.findOne({ email: normalizedEmail });

    // If Mode is LOGIN and User is NOT registered in DB
    if (!user && mode === "login") {
      return res.status(403).json({
        success: false,
        code: "USER_NOT_REGISTERED",
        message: "No community account found for this Google email. Please register first.",
      });
    }

    // Register or update user record
    if (!user) {
      user = await User.create({
        email: normalizedEmail,
        name: name || normalizedEmail.split("@")[0],
        provider: "google",
        isEmailVerified: true, // Google accounts are pre-verified by Google
        avatarUrl,
        supabaseUid,
      });
    } else {
      user.provider = "google";
      user.isEmailVerified = true;
      if (avatarUrl) user.avatarUrl = avatarUrl;
      if (supabaseUid) user.supabaseUid = supabaseUid;
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Authenticated via Google!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        avatarUrl: user.avatarUrl,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Google Auth failed";
    console.error("[AUTH GOOGLE ERROR]:", error);
    return res.status(500).json({ success: false, message });
  }
};

// VERIFY EMAIL TOKEN
export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token, email } = req.body;

    if (!token && !email) {
      return res.status(400).json({ success: false, message: "Token or email is required." });
    }

    let user = null;

    if (token) {
      user = await User.findOne({
        verificationToken: token,
        verificationTokenExpires: { $gt: new Date() },
      });
    } else if (email) {
      user = await User.findOne({ email: email.toLowerCase().trim() });
    }

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification token.",
      });
    }

    user.isEmailVerified = true;
    (user as any).verificationToken = null;
    (user as any).verificationTokenExpires = null;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email successfully verified! You can now log into the community.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Verification failed";
    return res.status(500).json({ success: false, message });
  }
};

// GET ME
export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await User.findOne({ email: req.user.email });

    if (!user) {
      return res.status(403).json({
        success: false,
        code: "USER_NOT_REGISTERED",
        message: "User not found in community database.",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        avatarUrl: user.avatarUrl,
      },
    });
  } catch (error: unknown) {
    return res.status(500).json({ success: false, message: "Failed to fetch profile" });
  }
};
