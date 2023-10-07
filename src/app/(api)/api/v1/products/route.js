import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  try {
    // If slug is defined, return the product with that slug
    if (slug) {
      const product = await prisma.product.findMany({
        where: {
          slug,
        },
      });
      return NextResponse.json({ data: product, message: "Product" }, { status: 200 });
    }

    // If slug is not defined, return all products
    const allProducts = await prisma.product.findMany();
    return NextResponse.json({ data: allProducts, message: "All products" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
