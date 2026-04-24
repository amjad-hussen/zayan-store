"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">
          Contact <span className="text-secondary">Us</span>
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          We are here to help you anytime
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* CONTACT INFO */}
        <div className="bg-white border rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold text-primary mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6">
            If you have any questions, feedback, or need support — feel free to contact us.
            We usually reply within 24 hours.
          </p>

          <div className="space-y-4 text-sm">

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Email</p>
              <p className="font-semibold">support@groceryapp.com</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Phone</p>
              <p className="font-semibold">+880 1234-567890</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Location</p>
              <p className="font-semibold">Bangladesh</p>
            </div>

          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="bg-white border rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-semibold text-primary mb-4">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-xl hover:opacity-90 active:scale-95 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-10 text-sm text-gray-500">
        We value every message you send ❤️
      </div>

    </main>
  );
}