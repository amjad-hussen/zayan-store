"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function OfferCard({ item }) {

  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(item);

    // prevent duplicate toast
    toast.success("Added to cart 🛒", {
      id: "add-to-cart"
    });
  };

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />

        <span className="absolute top-2 left-2 bg-secondary text-white text-xs px-2 py-1 rounded">
          {item.discount}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col">

        <h2 className="font-semibold text-lg text-primary">
          {item.title}
        </h2>

        <p className="text-xs text-gray-500 mb-2">
          {item.shortDescription}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-secondary font-bold">
            ৳ {item.price}
          </span>
          <span className="line-through text-gray-400 text-sm">
            ৳ {item.oldPrice}
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-auto">

          {/* BUY NOW */}
          <button
            onClick={() => router.push(`/order-now?price=${item.price}`)}
            className="flex-1 bg-secondary text-white py-2 rounded-lg text-sm"
          >
            Buy Now
          </button>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className="flex-1 border border-secondary text-secondary py-2 rounded-lg text-sm hover:bg-secondary hover:text-white transition"
          >
            Add
          </button>

        </div>

      </div>
    </div>
  );
}