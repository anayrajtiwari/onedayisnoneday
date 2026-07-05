import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
  author: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
  },
  content: { type: String, required: true },
  category: { type: String, default: "General" },
  timestamp: { type: Date, default: Date.now },
});

const Discussion = mongoose.model("Discussion", discussionSchema);

export default Discussion;
