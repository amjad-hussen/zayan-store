"use client";

import { useState } from "react";
import data from "@/data/product.json";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";

export default function ManageItemsPage() {

  const [items, setItems] = useState(data);

  // 🔥 DELETE FUNCTION
  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    const updated = items.filter((item) => item.id !== id);
    setItems(updated);

    toast.success("Item deleted successfully 🗑️");
  };

  return (
    <ProtectedRoute>

      <main className="max-w-6xl mx-auto py-10 px-4">

        {/* TITLE */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary">
            Manage <span className="text-secondary">Items</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            View and manage all your products easily
          </p>
        </div>

        {/* TABLE (DESKTOP) */}
        <div className="hidden md:block bg-white border rounded-2xl shadow-md overflow-hidden">

          <table className="w-full text-left">

            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {items.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50 transition">

                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-12 w-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="p-4 font-medium text-primary">
                    {item.title}
                  </td>

                  <td className="p-4 text-gray-500">
                    {item.category}
                  </td>

                  <td className="p-4 text-secondary font-semibold">
                    ৳ {item.price}
                  </td>

                  <td className="p-4 text-center space-x-2">

                    {/* VIEW */}
                    <Link href={`/items/${item.id}`}>
                      <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:opacity-90">
                        View
                      </button>
                    </Link>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:opacity-90"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW (CARD) */}
        <div className="grid md:hidden gap-4">

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-2xl p-4 shadow-sm"
            >

              <div className="flex gap-4">

                <img
                  src={item.image}
                  className="h-20 w-20 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h2 className="font-semibold text-primary">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>

                  <p className="text-secondary font-bold mt-1">
                    ৳ {item.price}
                  </p>

                </div>

              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-4">

                <Link href={`/items/${item.id}`} className="flex-1">
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>

    </ProtectedRoute>
  );
}