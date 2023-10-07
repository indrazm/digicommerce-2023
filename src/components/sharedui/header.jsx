import { Search, ShoppingBag } from "lucide-react";
import React from "react";
import { CartIcon } from "../cart/components/cart.icon";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between my-4">
      <nav className="flex gap-4">
        <Link href="/">
          <div className="menu">Digicommerce</div>
        </Link>
        <div className="menu">Browser</div>
        <div className="menu">Become an author</div>
        <div className="menu">
          <Search />
        </div>
      </nav>
      <div className="flex gap-4">
        <div className="menu">Join Us</div>
        <div className="menu">Sign in</div>
        <div className="menu">
          <CartIcon />
        </div>
      </div>
    </header>
  );
};
