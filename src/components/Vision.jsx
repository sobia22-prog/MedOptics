import { Lightbulb, Sprout, Handshake } from "lucide-react";

function Vision() {
  return (
    <section className="bg-cyan-800 py-16 px-4 md:px-8">
      <div className="max-w-6xl p-10 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
          Our Vision
        </h2>
        <p className="text-white font-medium text-lg md:text-xl mt-10 mb-12 max-w-4xl mx-auto">
          To revolutionize the optical industry by providing high-quality, innovative solutions that are accessible to everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Progress */}
          <div className="group bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <Lightbulb
              size={50}
              className="text-yellow-500 mt-10 mb-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">PROGRESS</h3>
            <p className="text-gray-700 mt-5 mb-10 text-lg max-w-xs">
              Advancing technologies to meet the evolving needs of our customers.
            </p>
          </div>

          {/* Card 2 - Integrity */}
          <div className="group bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <Sprout
              size={50}
              className="text-green-600 mt-10 mb-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">INTEGRITY</h3>
            <p className="text-gray-700 mt-5 mb-10 text-lg max-w-xs">
              Upholding the highest standards in everything we do.
            </p>
          </div>

          {/* Card 3 - Collaboration */}
          <div className="group bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <Handshake
              size={50}
              className="text-yellow-600 mt-10 mb-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">COLLABORATION</h3>
            <p className="text-gray-700 mt-5 mb-10 text-lg max-w-xs">
              Working with industry leaders and professionals to shape the future of healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
