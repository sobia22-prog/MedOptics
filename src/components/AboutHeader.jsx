function AboutHeader() {
  return (
    <>
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-600 text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-900 mb-4 uppercase">
          About MedOptics
        </h1>
        <p className="text-white text-lg md:text-lg max-w-3xl mx-auto font-medium">
          Your Vision, Our Mission – Delivering cutting-edge optical solutions for a brighter future.
        </p>
      </section>

      {/* Divider BELOW the section */}
      <div className="w-12 h-1 bg-white mx-auto -mt-1 rounded-full" />
    </>
  );
}

export default AboutHeader;
