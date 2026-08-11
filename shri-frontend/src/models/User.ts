import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  name: string;
  passwordHash?: string;
  provider: "email" | "google";
  isEmailVerified: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  role: "member" | "admin";
  supabaseUid?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      default: null,
    },
    provider: {
      type: String,
      enum: ["email", "google"],
      default: "email",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    verificationTokenExpires: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },
    supabaseUid: {
      type: String,
      default: null,
    },
    avatarUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
