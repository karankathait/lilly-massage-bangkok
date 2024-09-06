import React from "react";

const Navbar = () => {
  return (
    <header className="bg-red-300">
      {/* Top bar with location and contact */}
      <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
        <div>
          <span className="mr-4">
            <i className="fas fa-map-marker-alt"></i> No. 12, Wales street, Australia.
          </span>
          <span>
            <i className="fas fa-phone"></i> + (528) 456-7592
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-xing"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <a href="#" className="text-4xl font-serif font-bold">
            Lilly Massage<span className="text-red-400">.</span>
          </a>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><a href="#" className="hover:text-red-400">Home</a></li>
            <li><a href="#" className="text-red-400 hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-400">Our Services</a></li>
            <li><a href="#" className="hover:text-red-400">Our Therapist</a></li>
            <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-red-300 p-2 rounded-full">
              <i className="fas fa-shopping-bag text-white"></i>
            </a>
            <a href="#" className="border border-red-300 text-red-300 px-4 py-2 rounded hover:bg-red-300 hover:text-white transition">
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
