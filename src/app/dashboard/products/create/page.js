import { CreateProduct } from "@/components/dashboard/components/products/create";

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/v1/categories");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data: categories } = await getCategories();

  return <CreateProduct categories={categories} />;
}
