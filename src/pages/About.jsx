import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHeader from '../components/AboutHeader';
import WhoWeAre from '../components/WhoWeAre';
import MeetCEO from '../components/MeetCEO';

function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <WhoWeAre />
      <MeetCEO />
      <Footer />
    </div>
  );
}

export default About;
