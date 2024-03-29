import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    password: { required: true, type: String },
    isAdmin: { required: true, type: String, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.models?.User || mongoose.model("User", UserSchema);

export default UserModel;
