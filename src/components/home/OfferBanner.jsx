"use client";

import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="bg-[#0f2747] text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-5">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* ICON */}
          <div className="bg-white/10 p-3 rounded-lg">
            <FaShoppingBag className="text-orange-400 text-xl" />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-sm md:text-lg font-semibold">
              Save More with Zayan Store
            </h2>
            <p className="text-[10px] md:text-sm text-gray-300">
              Exclusive offers and discounts on your daily essentials.
            </p>
          </div>

        </div>

        {/* RIGHT BUTTON */}
        <Link href="/offers">
          <button className="bg-orange-500 hover:bg-orange-600 transition px-4 md:px-5 py-2 rounded-lg text-xs md:text-sm font-medium flex items-center gap-1">
            Explore Offers →
          </button>
        </Link>

      </div>
    </div>
  );
}