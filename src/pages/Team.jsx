import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/AboutHeader';
import Footer from '../components/Footer';

function Team() {
  const teamMembers = [
    {
      name: "Yasir Irshad",
      title: "Zonal Sales Manager Centre-2 Multan",
      image: "/assets/team/yasir.jpg",
    },
    {
      name: "Ghulam Mohyddin",
      title: "Regional Sales Manager Centre-1 Lahore",
      image: "/assets/team/ghulam.jpg",
    },
    {
      name: "Tanveer Ahmed Kundi",
      title: "Zonal Sales Manager North Rawalpindi",
      image: "/assets/team/tanveer.jpg",
    },
    {
      name: "Technical Advisor",
      title: "",
      image: "/assets/team/advisor.jpg",
    },
    {
      name: "Director Finance",
      title: "",
      image: "/assets/team/director.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 uppercase mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-lg mb-12 font-medium">
            Bringing together expertise and passion to achieve excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-5 mr-5 gap-4 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 p-4 w-80 md:w-96"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <h3 className="text-cyan-700 font-bold text-3xl">{member.name}</h3>
                {member.title && (
                  <p className="text-lg text-gray-600 mt-1">{member.title}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
