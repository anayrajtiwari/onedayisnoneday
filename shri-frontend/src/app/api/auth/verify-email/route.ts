import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { token, email } = await req.json();

    if (!token && !email) {
      return NextResponse.json(
        { success: false, message: "Token or email is required." },
        { status: 400 }
      );
    }

    await connectDB();

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
      return NextResponse.json(
        { success: false, message: "Invalid or expired verification token." },
        { status: 400 }
      );
    }

    user.isEmailVerified = true;
    (user as any).verificationToken = null;
    (user as any).verificationTokenExpires = null;
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Email successfully verified! You can now log into the community.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Verification failed";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
