import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "shri_jwt_secret_key_2026_safe";

export async function POST(req: Request) {
  try {
    const { email, name, avatarUrl, supabaseUid, mode } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Google user email is required." },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();

    let user = await User.findOne({ email: normalizedEmail });

    // In Login mode, reject unregistered Google accounts
    if (!user && mode === "login") {
      return NextResponse.json(
        {
          success: false,
          code: "USER_NOT_REGISTERED",
          message: "No community account found for this Google email. Please register first.",
        },
        { status: 403 }
      );
    }

    // Register or update user record
    if (!user) {
      user = await User.create({
        email: normalizedEmail,
        name: name || normalizedEmail.split("@")[0],
        provider: "google",
        isEmailVerified: true,
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

    return NextResponse.json(
      {
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
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Google Auth failed";
    console.error("[API GOOGLE ERROR]:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
