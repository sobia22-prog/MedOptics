import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/images/logo2.png"
            alt="MedOptics Logo"
            className="h-17 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sticky md:flex space-x-10 font-bold text-md uppercase">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Distributors", path: "/distributors" },
            { name: "Team", path: "/team" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-black transition-all duration-300 hover:text-blue-600
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
                 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 font-bold text-sm uppercase items-center text-center">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/distributors" onClick={() => setIsOpen(false)}>Distributors</Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;