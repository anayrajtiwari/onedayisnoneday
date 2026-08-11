import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { connectDB } from "@/lib/db";
import { User, type IUser } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();

    // 1. Check if user exists in DB
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          code: "USER_ALREADY_EXISTS",
          message: "An account with this email already exists in the community. Please sign in.",
        },
        { status: 400 }
      );
    }

    // 2. Hash Password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 3. Generate Verification Token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    // 4. Create User Record in Database
    const newUser = (await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      provider: "email",
      isEmailVerified: false,
      verificationToken,
      verificationTokenExpires,
    })) as IUser;

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful! A verification email has been sent. Please verify your email before logging in.",
        data: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          isEmailVerified: newUser.isEmailVerified,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Registration failed";
    console.error("[API REGISTER ERROR]:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
