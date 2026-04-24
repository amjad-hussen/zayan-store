import React from "react";
import data from "@/data/testimonial.json";

const Testimonial = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">
          What Our <span className="text-secondary">Customers Say</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Real feedback from happy customers
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border"
              />

              <div>
                <h3 className="font-semibold text-primary">
                  {item.name}
                </h3>
                <p className="text-xs text-secondary">
                  {item.role}
                </p>
              </div>
            </div>

            {/* Message */}
            <p className="text-gray-600 text-sm leading-relaxed">
              “{item.message}”
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonial;