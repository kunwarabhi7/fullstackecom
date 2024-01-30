import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("mongodb connected successfully.");
  } catch (error) {
    console.log(error);
  }
}

export { dbConnect };
