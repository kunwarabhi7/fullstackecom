import { data } from "@/lib/Data";
import { dbConnect } from "@/lib/dbconnect";
import { ProductModel } from "@/lib/models/product.models";
import UserModel from "@/lib/models/user.models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req = NextRequest, res = NextResponse) => {
  const { Product, Users } = data;
  await dbConnect();
  await UserModel.deleteMany();
  await UserModel.insertMany(Users);

  await ProductModel.deleteMany();
  await ProductModel.insertMany(Product);

  return NextResponse.json({ message: "Seeded Successfully!", Users, Product });
};
