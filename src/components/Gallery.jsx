import React from "react";

const images = [
  {
    src: "/assets/gallery/injector-hand.jpg",
    label: "Accuject Injector",
  },
  {
    src: "/assets/gallery/injector-1.jpg",
    label: "Injector Type A",
  },
  {
    src: "/assets/gallery/injector-2.jpg",
    label: "Injector Type B",
  },
  {
    src: "/assets/gallery/injector-3.jpg",
    label: "Injector Pair",
  },
  {
    src: "/assets/gallery/lens.jpg",
    label: "Premium Lens",
  },
  {
    src: "/assets/gallery/vision.jpg",
    label: "Vision Correction",
  },
];

function GalleryComponent() {
  return (
    <section className="bg-blue-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 uppercase mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-700 text-lg mb-12 font-medium">
          Take a glimpse of what we do and who we are!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-10 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-lg text-center px-4">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryComponent;
