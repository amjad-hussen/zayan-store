"use client";

import React from "react";
import { LuShieldCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <div className="relative z-50 
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
    gap-4 md:gap-10 
    -mt-10 md:-mt-20 
    mx-4 md:mx-10 my-6 
    shadow-lg px-4 md:px-6 py-5 bg-white rounded-2xl">

      {/* ITEM */}
      <div className="flex items-start gap-3 md:items-center md:border-r md:pr-4">
        <div className="bg-primary text-white p-3 rounded-lg">
          <LuShieldCheck size={20} />
        </div>

        <div>
          <p className="text-sm md:text-base font-semibold">
            Best Quality
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            We ensure the best quality product for you.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-3 md:items-center md:border-r md:pr-4">
        <div className="bg-primary text-white p-3 rounded-lg">
          <TbTruckDelivery size={20} />
        </div>

        <div>
          <p className="text-sm md:text-base font-semibold">
            Fast Delivery
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Get your product delivered to your door.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-3 md:items-center md:border-r md:pr-4">
        <div className="bg-primary text-white p-3 rounded-lg">
          <IoMdPricetags size={20} />
        </div>

        <div>
          <p className="text-sm md:text-base font-semibold">
            Best Prices
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Affordable prices for every household.
          </p>
        </div>
      </div>

      {/* ITEM */}
      <div className="flex items-start gap-3 md:items-center">
        <div className="bg-primary text-white p-3 rounded-lg">
          <BiSupport size={20} />
        </div>

        <div>
          <p className="text-sm md:text-base font-semibold">
            24/7 Support
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            We are here to help anytime.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Features;