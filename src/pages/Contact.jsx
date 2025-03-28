import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/Contact';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
