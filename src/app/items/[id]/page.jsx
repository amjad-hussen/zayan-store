"use client";

import data from "@/data/product.json";
import Link from "next/link";
import { use } from "react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ItemDetails({ params }) {

  const { id } = use(params);
  const { addToCart } = useContext(CartContext);

  const item = data.find((p) => String(p.id) === String(id));

  if (!item) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-500">
          Item not found
        </h2>

        <Link href="/items">
          <button className="mt-4 bg-secondary text-white px-5 py-2 rounded-lg">
            Back to Items
          </button>
        </Link>
      </div>
    );
  }

  // 🔥 HANDLE ADD TO CART
  const handleAddToCart = () => {
    addToCart(item);
  };

  

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      {/* BACK BUTTON */}
      <Link href="/items">
        <button className="mb-6 text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
          ← Back to Items
        </button>
      </Link>

      {/* MAIN CARD */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden border group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col">

          <h1 className="text-3xl font-bold text-primary">
            {item.title}
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>

            <span className="text-secondary text-2xl font-bold">
              ৳ {item.price}
            </span>
          </div>

          {/* SHORT DESC */}
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            {item.shortDescription ||
              "Premium quality product with fast delivery and best pricing."}
          </p>

          {/* FULL DESC */}
          <div className="mt-5">
            <h2 className="text-lg font-semibold text-primary mb-2">
              Description
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-auto pt-6 flex gap-3">

            
            <Link href="/order-now">
              <button  className="bg-secondary text-white px-6 py-2 rounded-xl" >
                Buy Now
              </button>
            </Link>

            <button
              onClick={handleAddToCart}
              className="flex-1 border border-secondary text-secondary py-3 rounded-xl hover:bg-secondary hover:text-white transition"
            >
              Add to Cart
            </button>

          </div>

        </div>
      </div>

      {/* EXTRA DETAILS */}
      <div className="mt-8 bg-white border rounded-2xl p-5">

        <h2 className="text-xl font-semibold text-primary mb-4">
          Product Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Category</p>
            <p className="font-semibold">{item.category}</p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Price</p>
            <p className="font-semibold text-secondary">
              ৳ {item.price}
            </p>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Product ID</p>
            <p className="font-semibold">{item.id}</p>
          </div>

        </div>
      </div>

    </main>
  );
}