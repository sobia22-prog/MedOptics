import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <Header />
      <h1>Welcome to MedOptics</h1>
      <p>This is the Home Page. We're building this site step by step using React!</p>
      <Footer />
    </div>
  );
}

export default Home;
