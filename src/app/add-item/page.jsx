"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddItemPage() {

  const router = useRouter();

  const categories = [
    "Fruits",
    "Vegetables",
    "Drinks",
    "Snacks",
    "Dairy",
    "Meat",
    "Bakery",
    "Others"
  ];

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("New Item:", form);

      toast.success("Item added successfully 🎉");

      // reset
      setForm({
        title: "",
        shortDescription: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });

      // 🔥 redirect to items page
      setTimeout(() => {
        router.push("/items");
      }, 1200);

    } catch (err) {
      toast.error("Failed to add item ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>

      <main className="max-w-3xl mx-auto py-10 px-4">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Add <span className="text-secondary">New Item</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Fill the form to add a new product
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white border rounded-2xl shadow-md p-6">

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* TITLE */}
            <div>
              <label className="text-sm text-gray-600">Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Fresh Apple"
                value={form.title}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* SHORT DESC */}
            <div>
              <label className="text-sm text-gray-600">
                Short Description
              </label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Short summary of the product"
                value={form.shortDescription}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* FULL DESC */}
            <div>
              <label className="text-sm text-gray-600">
                Full Description
              </label>
              <textarea
                name="description"
                placeholder="Write full details about the product..."
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
                required
              ></textarea>
            </div>

            {/* PRICE + CATEGORY */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm text-gray-600">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="e.g. 50"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* IMAGE */}
            <div>
              <label className="text-sm text-gray-600">
                Image URL (optional)
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* BUTTON */}
            <button
              disabled={loading}
              className="w-full bg-secondary text-white py-2.5 rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Item"}
            </button>

          </form>

        </div>

      </main>

    </ProtectedRoute>
  );
}