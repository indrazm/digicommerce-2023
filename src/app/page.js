import { ProductCard } from "@/components/home/components/product.card";

export default function Page() {
  return (
    <main className="space-y-20">
      <section className="max-w-3xl m-auto text-center space-y-8 mt-40">
        <h1>7,576 curated design resources to speed up your creative workflow.</h1>
        <h4>Join a growing family of 699,616 designers and makers from around the world.</h4>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
