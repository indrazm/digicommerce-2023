"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cartState } from "../atom/cart.atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export const CartIcon = () => {
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  return (
    <div className="relative">
      <Link href="/cart">
        <ShoppingBag />
        {cart.length > 0 ? (
          <div className="absolute -top-2 -right-2 text-xs font-medium bg-primary-600 text-black w-5 h-5 rounded-full flex justify-center items-center">
            {cart.length}
          </div>
        ) : null}
      </Link>
    </div>
  );
};
