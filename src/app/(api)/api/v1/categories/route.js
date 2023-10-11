import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json({ data: categories, message: "Categories fetched successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const { name } = await req.json();
  const slug = slugify(name, { lower: true });

  try {
    const createCategory = await prisma.category.create({
      data: {
        name,
        slug,
      },
    });
    return NextResponse.json({ data: createCategory, message: "Category created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
