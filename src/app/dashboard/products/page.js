import Link from "next/link";
import { ProductCard } from "@/components/home/components/product.card";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/v1/products");
  const products = await response.json();
  return products;
}

export default async function Page() {
  const { data: products } = await getProducts();
  console.log(products);

  return (
    <main>
      <section className="flex justify-between items-end">
        <div>
          <h3>Products</h3>
          <p>Here is all of your products</p>
        </div>
        <Link href="/dashboard/products/create">
          <button>Create Product</button>
        </Link>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {products.map(({ id, name, price, featuredImage, slug }) => {
          const imageUrl = `https://ik.imagekit.io/wqoeuqhlmc/${id}/${featuredImage}`;
          <ProductCard key={id} name={name} price={price} featuredImage={imageUrl} slug={slug} />;
        })}
      </section>
    </main>
  );
}
