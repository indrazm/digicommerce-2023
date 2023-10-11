import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

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

export async function POST(req) {
  const { id, name, shortDescription, longDescription, price, category, featuredImageName, productImagesNameArray } = await req.json();
  const slug = slugify(name, { lower: true });

  try {
    const product = await prisma.product.create({
      data: {
        id,
        name,
        slug,
        shortDesc: shortDescription,
        desc: longDescription,
        price: Number(price),
        categoryId: category,
        featuredImage: featuredImageName,
        productImages: productImagesNameArray,
      },
    });
    console.log("Product created: ", product);
    return NextResponse.json({ data: product, message: "Product created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
