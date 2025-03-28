import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          WELCOME TO MEDOPTICS
        </h1><br />
        <p className="text-lg md:text-xl mb-6">
          Innovative solutions for your health
        </p><br />
        <Link
          to="/products"
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300"
        >
          Explore Our Products
        </Link>
      </div>
    </div>
  );
}

export default Hero;
