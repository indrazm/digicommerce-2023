import { ProductCard } from "@/components/home/components/product.card";
import { API_URL } from "@/config/apiUrl";

async function getProducts() {
  const response = await fetch(`http://localhost:3000/api/v1/products`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const { data: products } = await getProducts();
  console.log(products);

  return (
    <main className="space-y-20">
      <section className="max-w-3xl m-auto text-center space-y-8 mt-40">
        <h1>7,576 curated design resources to speed up your creative workflow.</h1>
        <h4>Join a growing family of 699,616 designers and makers from around the world.</h4>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map(({ id, name, slug, price, featuredImage }) => {
          const imageUrl = `https://ik.imagekit.io/wqoeuqhlmc/${id}/${featuredImage}`;
          console.log(imageUrl);
          return <ProductCard key={id} slug={slug} price={price} name={name} featuredImage={imageUrl} />;
        })}
      </section>
    </main>
  );
}
