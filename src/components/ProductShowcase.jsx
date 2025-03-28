function ProductShowcase({ showMore = true }) {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl pt-15 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-6xl md:text-5xl font-bold text-cyan-700 uppercase mb-12">
          Our Premium Products
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-10 pr-10 gap-8">
          {[
            {
              title: "Premium Optical Lens",
              image: "/assets/products/lens.jpg",
              desc: "Crafted with precision for ultimate clarity, our lenses offer unbeatable performance.",
            },
            {
              title: "Accuject Injectors",
              image: "/assets/products/injector.jpg",
              desc: "The Accuject Dual Injector system represents cutting-edge technology in ophthalmic surgical instruments.",
            },
            {
              title: "Vision Correction",
              image: "/assets/products/vision.jpg",
              desc: "Advanced lenses and contacts designed for perfect vision in any condition.",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-full h-48 overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-lg mt-5 mb-6 max-w-xs">
                {product.desc}
              </p>
              <button className="bg-amber-400 text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300 hover:bg-amber-500 hover:-translate-y-0.5">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Conditionally Render Show More */}
        {showMore && (
          <div className="mt-12">
            <button className="bg-amber-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-amber-500 hover:-translate-y-0.5">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductShowcase;
