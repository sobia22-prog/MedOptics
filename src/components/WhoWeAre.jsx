function WhoWeAre() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title and intro */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-sky-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 align-left font-regular">
            MedOptics is dedicated to providing state-of-the-art optical care with innovative technology and unparalleled customer service.
            With years of expertise in the optical industry, we’re on a mission to redefine how people perceive vision care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-40 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-4 ml-20 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-sky-700 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-700 text-md leading-relaxed text-justify">
              At MedOptics, our mission is to redefine eye care by delivering exceptional vision solutions that empower individuals to see
              the world with clarity and confidence. We are dedicated to utilizing the latest advancements in optical technology to ensure
              precision, comfort, and lasting eye health. Through our commitment to quality care and innovation, we strive to enhance everyday
              experiences and enrich lives by providing tailored solutions for every unique vision need.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-4 mr-20 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-sky-700 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-700 text-md leading-relaxed text-justify">
              Our vision is to be the leading global provider of innovative and personalized optical solutions. At MedOptics, we envision
              a world where everyone enjoys the gift of perfect sight, free from limitations. Through continuous research, advanced technology,
              and a patient-centered approach, we aim to set new standards in the optical industry. By redefining eye care with excellence and
              innovation, we aspire to transform lives, one vision at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
