import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/AboutHeader';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div>
      <Navbar />
      <Header />
      <h1>Not Found Page</h1>
      <p>This is the Not Found Page. We're building this site step by step using React!</p>
      <Footer />
    </div>
  );
}

export default NotFound;
