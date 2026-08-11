import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI || MONGODB_URI.includes("<db_password>")) {
    console.warn("[DB WARNING]: MONGODB_URI is missing or contains placeholder '<db_password>'. Please update MONGODB_URI in Vercel.");
    return null;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((m) => m).catch((err) => {
      console.warn("[DB CONNECTION ERROR]:", err.message);
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.warn("[DB CONNECTION EXCEPTION]:", e);
    return null;
  }

  return cached.conn;
}
