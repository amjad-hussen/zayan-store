import React from "react";
import data from "@/data/DailyEssentialItems.json";
import EssentialProductsCard from "./EssentialProductsCard";

const DailyEssiential = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Daily <span className="text-secondary">Essentials</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Fresh products for your everyday needs
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {data.map((item) => (
          <EssentialProductsCard key={item.id} product={item} />
        ))}
      </div>

    </main>
  );
};

export default DailyEssiential;