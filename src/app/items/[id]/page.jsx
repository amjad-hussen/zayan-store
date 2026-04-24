"use client";

import data from "@/data/product.json";
import Link from "next/link";
import { use } from "react";

export default function ItemDetails({ params }) {

  const { id } = use(params);

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

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      <Link href="/items">
        <button className="mb-6 text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
          ← Back to Items
        </button>
      </Link>

      <div className="bg-white border rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="rounded-xl overflow-hidden border">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col">

          <h1 className="text-3xl font-bold text-primary">
            {item.title}
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>

            <span className="text-secondary text-xl font-bold">
              ৳ {item.price}
            </span>
          </div>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            {item.shortDescription ||
              "Fresh premium quality product selected carefully for your daily needs. Best quality guaranteed with fast delivery and affordable pricing."}
          </p>

          <div className="mt-5">
            <h2 className="text-lg font-semibold text-primary mb-2">
              Description
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>


          <div className="mt-auto pt-6 flex gap-3">

            <button className="flex-1 bg-secondary text-white py-3 rounded-xl hover:opacity-90 active:scale-95 transition">
              Buy Now
            </button>

            <button className="flex-1 border border-secondary text-secondary py-3 rounded-xl hover:bg-secondary hover:text-white transition">
              Add to Cart
            </button>

          </div>

        </div>
      </div>

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
            <p className="font-semibold text-secondary">৳ {item.price}</p>
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