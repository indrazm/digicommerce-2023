import Link from "next/link";
import React from "react";

export const DashboardTemplate = ({ children }) => {
  return (
    <main className="flex h-screen">
      <aside className="w-[230px] border-r-1 border-secondary-900 bg-secondary-900/40 p-6 space-y-4">
        <div className="menu">Dashboard</div>
        <Link href="/dashboard/products" className="block">
          <div className="menu">Products</div>
        </Link>
        <div className="menu">Orders</div>
      </aside>
      <section className="w-[calc(100vw-230px)]  p-6">{children}</section>
    </main>
  );
};
