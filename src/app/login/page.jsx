"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "/";

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

      toast.success("Login successful 🎉", {
        id: "login-success"
      });

      setTimeout(() => {
        router.push(from);
      }, 1200);

    } catch (err) {

      if (err.code === "auth/user-not-found") {
        toast.error("No account found ❌");
      } else if (err.code === "auth/wrong-password") {
        toast.error("Wrong password ❌");
      } else {
        toast.error("Login failed ❌");
      }

    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();

      toast.success("Login successful 🎉", {
        id: "google-login-success"
      });

      setTimeout(() => {
        router.push(from);
      }, 1200);

    } catch {
      toast.error("Google login failed ❌");
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="bg-white border rounded-2xl shadow-md p-8">

          <h1 className="text-3xl font-bold text-center text-primary mb-6">
            Login to <span className="text-secondary">Your Account</span>
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>

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
              <label className="text-sm text-gray-600">Password</label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              disabled={loading}
              className="w-full bg-secondary text-white py-2.5 rounded-xl disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <hr className="flex-1" />
              OR
              <hr className="flex-1" />
            </div>

            {/* GOOGLE LOGIN */}
            <button
              type="button"
              onClick={handleGoogle}
              className="w-full border py-2.5 rounded-xl hover:bg-gray-50"
            >
              Continue with Google
            </button>

            {/* REGISTER */}
            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <Link href="/register" className="text-secondary font-medium">
                Register
              </Link>
            </p>

          </form>

        </div>

      </div>

    </main>
  );
}