"use client";

import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    toast.success("Added to cart 🛒");
  };

  // ✅ REMOVE
  const removeFromCart = (id) => {
    const updated = cart.filter((item, i) => i !== id);
    setCart(updated);
    toast.success("Removed from cart ❌");
  };

  // ✅ TOTAL PRICE
  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}