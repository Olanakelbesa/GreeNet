import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String }, 
    password: { type: String },
    image: { type: String },
    provider: { type: String, default: "credentials" },
    otp: { type: String }, // Store OTP temporarily
    verified: { type: Boolean, default: false }, // Track OTP verification status
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
