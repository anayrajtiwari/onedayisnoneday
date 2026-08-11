import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "shri_jwt_secret_key_2026_safe";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();

    // 1. STRICT DB CHECK: User MUST exist in community database
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          code: "USER_NOT_REGISTERED",
          message: "Account not registered in the SHRI community. Please click 'Register' to join.",
        },
        { status: 403 }
      );
    }

    // 2. STRICT VERIFICATION CHECK: Email MUST be verified
    if (!user.isEmailVerified && user.provider === "email") {
      return NextResponse.json(
        {
          success: false,
          code: "EMAIL_NOT_VERIFIED",
          message: "Your email address is not verified yet. Please check your inbox and verify your email.",
        },
        { status: 403 }
      );
    }

    // 3. Password Verification
    if (user.passwordHash) {
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
        return NextResponse.json(
          { success: false, message: "Invalid credentials. Please check your password." },
          { status: 401 }
        );
      }
    }

    // 4. Issue Session JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      {
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
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Login failed";
    console.error("[API LOGIN ERROR]:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
