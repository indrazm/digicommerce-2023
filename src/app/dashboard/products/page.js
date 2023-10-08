import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h3>Products</h3>
        <p>Here is all of your products</p>
      </div>
      <Link href="/dashboard/products/create">
        <button>Create Product</button>
      </Link>
    </div>
  );
}
