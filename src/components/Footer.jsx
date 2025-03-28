import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="flex justify-center max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div className="bg-gray-100 text-center align-center p-6 rounded shadow-md">
          <h3 className="text-lg mt-10 font-bold mb-4">ABOUT MEDOPTICS</h3>
          <p className="text-md text-gray-700 mb-15">
            At MedOptics, we are committed to revolutionizing vision care through innovative optical solutions.
            Experience clarity and confidence with our premium services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-100 text-center align-center p-6 rounded shadow-md">
          <h3 className="text-lg mt-10 font-bold mb-4">QUICK LINKS</h3>
          <ul className="text-md space-y-2 text-gray-700">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-gray-100 text-center align-center p-6 rounded shadow-md">
          <h3 className="text-lg mt-10 font-bold mb-4">CONTACT US</h3>
          <p className="text-md text-gray-700">
            <span className="font-bold">Phone:</span> +92 321 4243615
          </p>
          <p className="text-md text-gray-700 mt-2">
            <span className="font-bold">Email:</span> info@medoptics.com
          </p>
          <p className="text-md text-gray-700 mt-2">
            <span className="font-bold">Address:</span> Model Town Lahore
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 ml-20 mr-20 text-center bg-gray-100 py-6 rounded mx-4 md:mx-0 shadow-md">
        <h4 className="font-bold mb-4">FOLLOW US</h4>
        <div className="flex justify-center space-x-6 text-cyan-600">
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Linkedin size={20} /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-cyan-600 text-white text-center py-4 mt-6 text-sm">
        © 2024 MedOptics. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
