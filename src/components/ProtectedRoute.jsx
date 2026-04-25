"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?from=${pathname}`);
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!user) return null;

  return children;
}