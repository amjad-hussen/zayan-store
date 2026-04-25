"use client";

import offers from "@/data/offersData.json";
import OfferCard from "@/components/OfferCard";

export default function OffersPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
        Special <span className="text-secondary">Offers</span>
      </h1>

      {/* Sub Heading */}
      <p className="text-center text-gray-500 mb-8">
        Grab the best deals before they’re gone 🚀
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          offers.map((item) => (
            <OfferCard key={item.id} item={item} />
          ))
        }
      </div>

    </main>
  );
}