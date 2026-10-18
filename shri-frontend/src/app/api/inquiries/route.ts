import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Inquiry } from "@/models/Inquiry";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, interest, message } = body;

    if (!name || !email || !interest) {
      return NextResponse.json(
        { success: false, message: "Name, email, and category are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Attempt saving to MongoDB
    try {
      const db = await connectDB();
      if (db) {
        await Inquiry.create({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          interest: interest.trim(),
          message: message ? message.trim() : "",
          createdAt: new Date(),
        });
      } else {
        console.info("[INQUIRY LOG]: DB offline or not configured. Inquiry payload recorded:", {
          name,
          email,
          interest,
          messageLength: message?.length || 0,
        });
      }
    } catch (dbErr) {
      console.warn("[INQUIRY DB WARNING]: Could not persist inquiry to database:", dbErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received by the SHRI Directorate.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[INQUIRY ROUTE ERROR]:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
