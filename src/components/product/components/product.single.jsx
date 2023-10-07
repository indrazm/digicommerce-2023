"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cartState } from "@/components/cart/atom/cart.atom";
import { useRecoilState } from "recoil";

export const ProductSingle = ({ productData }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = () => {
    const newCart = [...cart];
    newCart.push(productData);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <main className="space-y-20">
      <section className="flex justify-between items-end">
        <div className="space-y-2">
          <h3>{productData.name}</h3>
          <p>{productData.shortDesc}</p>
        </div>
        <button onClick={handleAddToCart}>Add to cart ${productData.price}</button>
      </section>
      <section className="grid grid-cols-2 gap-6">
        {productData.productImages.map((item, index) => {
          return (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden ">
              <Image alt={productData.name} src={item} fill className="object-cover" />
            </div>
          );
        })}
      </section>
      <section className="grid grid-cols-3 gap-6">
        <div className="space-y-3 col-span-2">
          <h3>Product details</h3>
          <p>{productData.desc}</p>
        </div>
        <div className="space-y-3">
          <h3>Highlights</h3>
          <ul className="space-y-3">
            {productData.highlights.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-2 ">
                  <CheckCircle2 fill="#ff4d2e" stroke="#ffac9d" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};
