import type { Request, Response } from "express";
import Inquiry from "../models/Inquiry.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, interest, message } = req.body;
    
    // Save to database
    const inquiry = new Inquiry({ name, email, interest, message });
    await inquiry.save();

    // Send notification
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.NOTIFICATION_FROM_EMAIL || "SHRI <notifications@shri.vision>",
        to: [process.env.NOTIFICATION_TO_EMAIL || "anayraj47@gmail.com"],
        subject: `New Inquiry: ${interest}`,
        text: `From: ${name} (${email})\nCategory: ${interest}\nMessage: ${message}\nTimestamp: ${new Date().toISOString()}`,
      });
    }

    console.log(`[INQUIRY] Successfully processed inquiry from ${email}`);

    res.status(201).json({
      success: true,
      message: "Your intention has been received. We will reach out when the time is right.",
    });
  } catch (error) {
    console.error("[INQUIRY ERROR]", error);
    res.status(500).json({ success: false, message: "The divine flow was interrupted." });
  }
};
