import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("[DB] No MONGODB_URI found. Database features will be unavailable.");
      return;
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`[DB] Connected to MongoDB: ${conn.connection.host}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[DB] Connection Error: ${message}`);
    console.warn("[DB] Proceeding without database connection...");
  }
};

export default connectDB;
