import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/AboutHeader';
import Footer from '../components/Footer';
import GalleryComponent from '../components/Gallery';

function Gallery() {
  return (
    <div>
      <Navbar />
      <GalleryComponent />
      <Footer />
    </div>
  );
}

export default Gallery;
