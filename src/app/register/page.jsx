"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const { registerUser } = useContext(AuthContext);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 PASS NAME HERE
      await registerUser(form.email, form.password, form.name);

      // reset
      setForm({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Account created successfully 🎉");

      setTimeout(() => {
        router.push("/");
      }, 1500);

    } catch (err) {

      if (err.code === "auth/email-already-in-use") {
        toast.error("Email already in use ❌");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password must be 6+ characters ⚠️");
      } else {
        toast.error("Registration failed ❌");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="bg-white border rounded-2xl shadow-md p-8">

          <h1 className="text-3xl font-bold text-center text-primary mb-6">
            Create <span className="text-secondary">Account</span>
          </h1>

          <form onSubmit={handleRegister} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-secondary text-white py-2.5 rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Register"}
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-secondary font-medium">
                Login
              </Link>
            </p>

          </form>

        </div>

      </div>

    </main>
  );
}