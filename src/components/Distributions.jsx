function Distributor() {
  const distributorLogos = [
    {
      name: "Aaren Scientific",
      img: "/assets/distributors/aaren.png",
    },
    {
      name: "SBM Sistemi",
      img: "/assets/distributors/sbm.png",
    },
    {
      name: "MEDA",
      img: "/assets/distributors/meda.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl pt-10  mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 uppercase mb-6">
          Our Trusted Distributors
        </h2>
        <p className="text-gray-600 text-lg font-semibold md:text-lg mb-12 max-w-2xl mx-auto">
          We partner with leading distributors to bring you the best in optical care.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {distributorLogos.map((distributor, idx) => (
            <div
              key={idx}
              className="group bg-blue-50 rounded-lg p-6 w-full max-w-xs h-44 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={distributor.img}
                alt={distributor.name}
                className="max-h-30 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-amber-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-amber-500 hover:-translate-y-0.5">
            View All Distributors
          </button>
        </div>
      </div>
    </section>
  );
}

export default Distributor;
