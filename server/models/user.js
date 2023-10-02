import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      default: "18",
    },
    work: {
      type: String,
      default: "",
    },
    contactNo: {
      type: String,
      deafault: "",
      unique: true,
    },
    bio: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "male",
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
