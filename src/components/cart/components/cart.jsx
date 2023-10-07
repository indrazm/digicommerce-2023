"use client";

import { useRecoilState } from "recoil";
import { cartState } from "../atom/cart.atom";

export const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const totalPriceInCart = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <main className="space-y-12">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h2>No items in cart</h2>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(({ id, name, price }, index) => {
              return (
                <div key={index} className="flex justify-between items-center">
                  <h3>{name}</h3>
                  <div className="flex items-center gap-2">
                    <h3>${price}</h3>
                    <button onClick={() => handleRemoveFromCart(index)}>x</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between border-t-1 pt-8">
            <h2>Total Price in Cart</h2>
            <h1>${totalPriceInCart}</h1>
          </div>
        </>
      )}
    </main>
  );
};
