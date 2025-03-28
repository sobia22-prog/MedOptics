import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section className="bg-blue-100 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 text-lg font-medium mt-20 mb-12">
          We'd love to hear from you. Get in touch with us today!
        </p>

        <div className="bg-blue-900 text-white rounded-lg shadow-lg ml-40 mr-40 py-10 px-8 text-left">
          <h3 className="text-2xl font-bold mb-8">Reach Us At</h3>

          <div className="flex items-center mb-6">
            <PhoneCall className="text-red-400 mr-4" />
            <span className="text-lg">+92 321 4243615</span>
          </div>

          <div className="flex items-center mb-6">
            <Mail className="text-red-400 mr-4" />
            <span className="text-lg">info@medoptics.com</span>
          </div>

          <div className="flex items-center">
            <MapPin className="text-red-400 mr-4" />
            <span className="text-lg">Model Town, Lahore</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;
