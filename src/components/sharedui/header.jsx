import { Search, ShoppingBag } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between my-4">
      <nav className="flex gap-4">
        <div className="menu">Digicommerce</div>
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
          <ShoppingBag />
        </div>
      </div>
    </header>
  );
};
