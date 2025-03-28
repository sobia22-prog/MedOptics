import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <Header />
      <h1>Contact Page</h1>
      <p>This is the Contact Page. We're building this site step by step using React!</p>
      <Footer />
    </div>
  );
}

export default Contact;
