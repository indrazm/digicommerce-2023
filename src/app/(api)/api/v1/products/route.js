import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allProducts = await prisma.product.findMany();
    return NextResponse.json({ data: allProducts, message: "All products" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
