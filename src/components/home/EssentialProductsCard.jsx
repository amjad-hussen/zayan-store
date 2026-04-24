import React from "react";

const EssentialProductsCard = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="h-52 w-full overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">

        {/* Title */}
        <h2 className="text-lg font-semibold text-primary group-hover:text-secondary transition">
          {product.title}
        </h2>

        {/* Category */}
        <p className="text-xs inline-block px-2 py-1 rounded-full bg-orange-50 text-secondary">
          {product.category}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-3">

          <span className="text-lg font-bold text-primary">
            ৳ {product.price}
          </span>

          <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition">
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default EssentialProductsCard;