import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  interest: { type: String, required: true },
  message: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

export const Inquiry =
  mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);
export default Inquiry;
