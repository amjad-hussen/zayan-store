"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import NavLink from "../button/NavLink";
import { BsCart3 } from "react-icons/bs";
import { AuthContext } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  const { totalItems } = useContext(CartContext);
  const [imgError, setImgError] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully 👋");
    } catch {
      toast.error("Logout failed ❌");
    }
  };

  const nav = (
    <>
      <li><NavLink href={"/"}>Home</NavLink></li>
      <li><NavLink href={"/items"}>All Products</NavLink></li>
      <li><NavLink href={"/about"}>About</NavLink></li>
      <li><NavLink href={"/contact"}>Contact</NavLink></li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-200 shadow-sm">

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-3 md:px-6">

        <div className="navbar min-h-[70px]">

          {/* LEFT */}
          <div className="navbar-start gap-2">

            {/* MOBILE MENU */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2">
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                {nav}
              </ul>
            </div>

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={75}
                height={50}
                className="object-contain"
              />
            </Link>

          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {nav}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-2">

            {/* 🛒 CART WITH NOTIFICATION */}
            <Link
              href="/cart"
              className="relative btn btn-outline btn-secondary btn-sm md:btn-md flex items-center justify-center"
            >
              <BsCart3 size={20} />

              {/* 🔥 BADGE */}
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* 👤 USER */}
            {
              user ? (
                <div className="dropdown dropdown-end">

                  {/* PROFILE */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer rounded-full"
                  >
                    {
                      user.photoURL && !imgError ? (
                        <Image
                          src={user.photoURL}
                          alt="user"
                          width={40}
                          height={40}
                          className="rounded-full border"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                          <FaUserCircle className="text-2xl text-black" />
                        </div>
                      )
                    }
                  </div>

                  {/* DROPDOWN */}
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-white border rounded-xl mt-3 w-56 p-3 shadow space-y-1"
                  >

                    <li className="font-semibold text-primary pointer-events-none">
                      {user.displayName || "User"}
                    </li>

                    <li className="text-xs text-gray-500 pointer-events-none">
                      {user.email}
                    </li>

                    <div className="border-t my-1"></div>

                    <li>
                      <Link href="/add-item">➕ Add Product</Link>
                    </li>

                    <li>
                      <Link href="/manage-item">📦 Manage Products</Link>
                    </li>

                    <li>
                      <Link href="/cart">🛒 My Cart</Link>
                    </li>

                    <li>
                      <Link href="/offers">🚪 Offers</Link>
                    </li>

                    <div className="border-t my-1"></div>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        🚪 Logout
                      </button>
                    </li>

                  </ul>
                </div>
              ) : (
                <Link href="/login">
                  <button className="btn btn-secondary btn-sm md:btn-md">
                    Login
                  </button>
                </Link>
              )
            }

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;