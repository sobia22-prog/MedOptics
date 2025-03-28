import { Microscope, Heart, Globe } from "lucide-react";

function Mission() {
  return (
    <section className="bg-gray-200 py-16 px-4 md:px-8">
      <div className="max-w-6xl p-10 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4 uppercase">
          Our Mission
        </h2>
        <p className="text-gray-500 font-semibold text-lg md:text-xl italic mt-10 mb-12 max-w-3xl mx-auto">
          We are dedicated to improving the quality of life through advanced optical products designed to meet the unique needs of every individual.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-sky-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <Microscope
              size={50}
              className="text-cyan-600 mt-10 mb-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">INNOVATION</h3>
            <p className="text-gray-700 mt-5 mb-10 text-lg max-w-xs">
              Constantly pushing boundaries to develop cutting-edge solutions for our customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-sky-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <Heart
              size={50}
              className="text-red-500 mt-10 mb-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">CARE</h3>
            <p className="text-gray-700 mt-5 mb-10 text-lg max-w-xs">
              Ensuring the well-being of every customer with products that enhance their quality of life.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-sky-50 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <Globe
              size={50}
              className="text-green-600 mt-10 mb-10 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-cyan-700 mb-2">SUSTAINABILITY</h3>
            <p className="text-gray-700 mt-5 mb-10 text-lg max-w-xs">
              Creating environmentally responsible products that leave a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
