import React from "react";

import { ProductSingle } from "@/components/product/components/product.single";

async function getProductsBySlug(slug) {
  const res = await fetch(`http://localhost:3000/api/v1/products?slug=${slug}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { slug } = params;
  const { data } = await getProductsBySlug(slug);
  const productData = data[0];

  return <ProductSingle productData={productData} />;
}
