"use client";

import { useState } from "react";
import data from "@/data/product.json";
import Link from "next/link";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const filteredItems = data.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    const matchPrice =
      priceFilter === "All"
        ? true
        : priceFilter === "low"
        ? item.price <= 50
        : priceFilter === "mid"
        ? item.price > 50 && item.price <= 100
        : item.price > 100;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* PAGE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">
          Grocery <span className="text-secondary">Items</span>
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          Fresh daily essentials delivered to your home
        </p>
      </div>

      {/* FILTER SECTION */}
      <div className="bg-white border rounded-2xl shadow-sm p-5 mb-10 transition hover:shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary transition"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary transition"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="All">All Price</option>
            <option value="low">Low (≤ 50)</option>
            <option value="mid">Medium (51–100)</option>
            <option value="high">High (100+)</option>
          </select>

        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full focus-within:ring-2 focus-within:ring-secondary"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt={item.title}
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1 text-center">

              {/* TITLE (ONLY PRIMARY COLOR) */}
              <h2 className="text-lg font-semibold text-primary">
                {item.title}
              </h2>

              {/* SHORT DESC */}
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {item.shortDescription}
              </p>

              {/* PRICE */}
              <p className="text-secondary font-bold mt-2 text-lg">
                ৳ {item.price}
              </p>

              {/* BUTTON */}
              <div className="mt-auto pt-4">
                 <Link href={`/items/${String(item.id)}`}>
                  <button className="w-full bg-secondary text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200">
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}