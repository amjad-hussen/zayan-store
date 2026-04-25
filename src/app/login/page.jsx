"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginUser(form.email, form.password);

      setForm({ email: "", password: "" });

      toast.success("Login successful 🎉");

      setTimeout(() => {
        router.push("/");
      }, 1000);

    } catch (err) {
      toast.error("Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();

      toast.success("Login successful 🎉");

      setTimeout(() => {
        router.push("/");
      }, 1000);

    } catch {
      toast.error("Google login failed ❌");
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border rounded-2xl shadow-md p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          <button
            disabled={loading}
            className="w-full bg-secondary text-white py-2 rounded-lg"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <div className="text-center text-sm text-gray-400">OR</div>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full border py-2 rounded-lg"
          >
            Google Login
          </button>

          <p className="text-center text-sm">
            Don’t have account? <Link href="/register">Register</Link>
          </p>

        </form>

      </div>

    </main>
  );
}