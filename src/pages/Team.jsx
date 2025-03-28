import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Team() {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <Header />
      <h1>Team Page</h1>
      <p>This is the Team Page. We're building this site step by step using React!</p>
      <Footer />
    </div>
  );
}

export default Team;
