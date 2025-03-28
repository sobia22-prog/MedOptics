function MeetCEO() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* CEO Image */}
        <div className="flex-shrink-0">
          <img
            src="/assets/images/atif-imran.jpg" // replace with your actual path
            alt="Mr Atif Imran - CEO"
            className="rounded-xl shadow-lg w-64 h-auto object-cover"
          />
        </div>

        {/* CEO Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Meet Our CEO
          </h2>
          <h3 className="text-xl text-cyan-700 font-semibold mb-4">
            Mr Atif Imran
          </h3>
          <p className="text-gray-700 text-md leading-relaxed mb-4 max-w-2xl">
            With over 20 years of experience in the optical industry, Mr Atif Imran has been a driving force behind MedOptics' success. His
            visionary leadership has transformed MedOptics into a trusted name.
          </p>
          <p className="italic text-gray-600 text-sm font-medium">
            "At MedOptics, we believe in the power of clarity — both in vision and in our values."
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetCEO;
