import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { createClient } from "@supabase/supabase-js";

const JWT_SECRET: string = process.env.JWT_SECRET || process.env.SUPABASE_JWT_SECRET || "shri_jwt_secret_key_2026_safe";

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

const supabaseAdmin = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Missing or invalid authorization token." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    await connectDB();

    let userEmail: string | null = null;

    // 1. Try decoding custom JWT
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as unknown as { email: string };
      if (decoded?.email) {
        userEmail = decoded.email.toLowerCase();
      }
    } catch (err) {
      // Fallback to Supabase token
    }

    // 2. Try Supabase Token if custom JWT fails
    if (!userEmail && supabaseAdmin) {
      const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
      if (!error && user?.email) {
        userEmail = user.email.toLowerCase();
      }
    }

    if (!userEmail) {
      return NextResponse.json(
        { success: false, message: "Invalid authentication token." },
        { status: 401 }
      );
    }

    // 3. Verify user in MongoDB Database
    const dbUser = await User.findOne({ email: userEmail });

    if (!dbUser) {
      return NextResponse.json(
        {
          success: false,
          code: "USER_NOT_REGISTERED",
          message: "User not registered in community database.",
        },
        { status: 403 }
      );
    }

    if (!dbUser.isEmailVerified && dbUser.provider === "email") {
      return NextResponse.json(
        {
          success: false,
          code: "EMAIL_NOT_VERIFIED",
          message: "Email address not verified.",
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: dbUser._id,
          name: dbUser.name,
          email: dbUser.email,
          role: dbUser.role,
          isEmailVerified: dbUser.isEmailVerified,
          avatarUrl: dbUser.avatarUrl,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Auth check failed";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
