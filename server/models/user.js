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
    contactNo: {
      type: String,
      unique: true,
    },
    profileImage: {
      type: Image,
      unique: false,
      default: "",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User
