"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function OrderPage() {

  const { cart, totalAmount } = useContext(CartContext);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    area: "inside", // inside = Sylhet
  });

  const deliveryCharge = form.area === "inside" ? 70 : 110;
  const finalTotal = totalAmount + deliveryCharge;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty ❌");
      return;
    }

    // ✅ SUCCESS
    toast.success(`Order placed! Total: ৳ ${finalTotal} 🎉`);

    // 👉 optional redirect
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Confirm <span className="text-secondary">Your Order</span>
      </h1>

      <div className="bg-white border rounded-2xl shadow-md p-6">

        <form onSubmit={handleOrder} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
              required
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-sm text-gray-600">Full Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              placeholder="House, Road, Area, District"
              className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
              required
            ></textarea>
          </div>

          {/* AREA SELECT */}
          <div>
            <label className="text-sm text-gray-600">Delivery Area</label>

            <select
              name="area"
              value={form.area}
              onChange={handleChange}
              className="w-full mt-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-secondary"
            >
              <option value="inside">Sylhet City (৳ 70)</option>
              <option value="outside">Outside Sylhet (৳ 110)</option>
            </select>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2 mt-4">

            <div className="flex justify-between text-sm">
              <span>Products Total</span>
              <span>৳ {totalAmount}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Delivery Charge</span>
              <span>৳ {deliveryCharge}</span>
            </div>

            <div className="border-t pt-2 flex justify-between font-bold text-lg text-secondary">
              <span>Total</span>
              <span>৳ {finalTotal}</span>
            </div>

          </div>

          {/* BUTTON */}
          <button
            className="w-full bg-secondary text-white py-3 rounded-xl hover:opacity-90 active:scale-95 transition"
          >
            Place Order
          </button>

        </form>

      </div>

    </main>
  );
}