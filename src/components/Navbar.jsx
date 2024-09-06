import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  
  // Function to check if a link is active
  const isActive = (path) => router.pathname === path;

  return (
    <header className="bg-[#F48380]">
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
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6 py-6">
          <Link href="/" className="text-4xl font-serif font-bold text-slate-800">
            Lilly Massage<span className="text-[#F48380]">.</span>
          </Link>
          <ul className="flex space-x-8 text-lg text-slate-800 font-medium">
            <li>
              <Link href="/" passHref>
                <p className={`montserrat-font font-semibold text-[16px] ${isActive('/') ? 'text-[#F48380]' : 'hover:text-[#F48380]'}`}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <p className={`montserrat-font font-semibold text-[16px] ${isActive('/about') ? 'text-[#F48380]' : 'hover:text-[#F48380]'}`}>
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <p className={`montserrat-font font-semibold text-[16px] ${isActive('/services') ? 'text-[#F48380]' : 'hover:text-[#F48380]'}`}>
                  Our Services
                </p>
              </Link>
            </li>
            <li>
              <Link href="/therapists" passHref>
                <p className={`montserrat-font font-semibold text-[16px] ${isActive('/therapists') ? 'text-[#F48380]' : 'hover:text-[#F48380]'}`}>
                  Our Therapists
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <p className={`montserrat-font font-semibold text-[16px] ${isActive('/contact') ? 'text-[#F48380]' : 'hover:text-[#F48380]'}`}>
                  Contact Us
                </p>
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="/book" passHref>
              <p className="border border-red-300 text-red-300 px-4 py-2 hover:bg-red-300 hover:text-white transition duration-300 ease-in-out">
                Book Now
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
