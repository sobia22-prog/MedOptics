import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <Header />
      <h1>Not Found Page</h1>
      <p>This is the Not Found Page. We're building this site step by step using React!</p>
      <Footer />
    </div>
  );
}

export default NotFound;
