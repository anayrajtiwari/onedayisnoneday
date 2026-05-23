import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  try {
    const { name, email, interest, message } = req.body;
    
    console.log(`[INQUIRY] New interest from ${name} (${email}) for ${interest}`);

    res.status(201).json({
      success: true,
      message: "Your intention has been received. We will reach out when the time is right.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "The divine flow was interrupted." });
  }
};
