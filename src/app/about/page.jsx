export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">

      {/* HERO SECTION */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">
          About <span className="text-secondary">Our Store</span>
        </h1>

        <p className="text-gray-500 mt-3 text-sm">
          Fresh groceries, better living, delivered to your doorstep
        </p>
      </div>

      {/* MAIN CONTENT CARD */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">

        {/* TEXT SECTION */}
        <div>

          <h2 className="text-2xl font-semibold text-primary mb-3">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We are a modern grocery platform focused on delivering fresh,
            high-quality daily essentials directly to your home.
            Our mission is to make grocery shopping simple, fast, and reliable
            for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            From rice, vegetables, and cooking oil to beverages and pulses —
            we carefully select every product to ensure the best quality
            for our customers.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We believe in trust, freshness, and convenience. That’s why
            thousands of customers choose us every day.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-secondary font-bold text-xl">100%</p>
              <p className="text-sm text-gray-500">Fresh Products</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-secondary font-bold text-xl">Fast</p>
              <p className="text-sm text-gray-500">Delivery</p>
            </div>

          </div>

        </div>

        {/* IMAGE SECTION */}
        <div className="rounded-xl overflow-hidden border">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="about"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-10 text-sm text-gray-500">
        Built with ❤️ for better grocery experience
      </div>

    </main>
  );
}