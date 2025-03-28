import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/AboutHeader';
import Footer from '../components/Footer';
import ProductShowcase from '../components/ProductShowcase';

function Products() {
  return (
    <div>
      <Navbar />
      <ProductShowcase showMore={false} />
      <Footer />
    </div>
  );
}

export default Products;
