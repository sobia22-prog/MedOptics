import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import ProductShowcase from '../components/ProductShowcase';
import Distributor from '../components/Distributions';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Vision />
      <ProductShowcase showMore={true} />
      <Distributor />
      <Footer />
    </div>
  );
}

export default Home;
