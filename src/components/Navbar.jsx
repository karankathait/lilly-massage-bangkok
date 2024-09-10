import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import DarkModeToggle from "@/components/DarkModeToogle.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to closed
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => router.pathname === path;

  return (
    // <nav className="absolute top-0 left-0 w-full z-10 bg-black bg-opacity-50">
    <nav className="w-full z-10 bg-white dark:bg-black ">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold text-[#FF708F] dark:text-[#DEB678]">
          LILLY MASSAGE
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className={`md:hidden text-white text-3xl cursor-pointer transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <div
          className={`md:flex space-x-6 items-center absolute md:relative md:top-0 top-16 left-0 w-full md:w-auto bg-[#00000080] bg-opacity-90 md:bg-transparent overflow-hidden transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 md:opacity-100"
          }`}
        >
          <ul className="josefin-sans-font flex flex-col md:flex-row md:space-x-6 p-6 md:p-0 space-y-4 md:space-y-0">
            <li className="transition-colors duration-300">
              <Link
                href="/"
                className={`${
                  isActive("/")
                    ? "text-[#FF708F] dark:text-[#DEB678]"
                    : "text-black dark:text-white hover:text-[#DEB678]"
                }`}
              >
                Home
              </Link>
            </li>

            <li className="transition-colors duration-300">
              <Link
                href="/about"
                className={`${
                  isActive("/about")
                    ? "text-[#FF708F] dark:text-[#DEB678]"
                    : "text-black dark:text-white hover:text-[#DEB678]"
                }`}
              >
                About Us
              </Link>
            </li>

            <li className="transition-colors duration-300">
              <Link
                href="/massage-price"
                className={`${
                  isActive("/massage-price")
                    ? "text-[#FF708F] dark:text-[#DEB678]"
                    : "text-black dark:text-white hover:text-[#DEB678]"
                }`}
              >
                Our Pricing
              </Link>
            </li>
            <li className="transition-colors duration-300">
              <Link
                href="/our-therapists"
                className={`${
                  isActive("/our-therapists")
                    ? "text-[#FF708F] dark:text-[#DEB678]"
                    : "text-black dark:text-white hover:text-[#DEB678]"
                }`}
              >
                Our Therapists
              </Link>
            </li>

            <li className="transition-colors duration-300">
              <Link
                href="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-[#FF708F] dark:text-[#DEB678]"
                    : "text-black dark:text-white hover:text-[#DEB678]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div
          className={`flex items-center space-x-4 md:static absolute md:top-0 right-8 md:right-0 top-20 transition-all duration-500 ease-in-out transform ${
            isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
          }`}
        >
          <Link href="#">
            <FaFacebook className="text-[#FF708F] dark:text-[#EFC481] text-xl" />
          </Link>
          <Link href="#">
            <FaWhatsapp className="text-[#FF708F] dark:text-[#EFC481] text-xl" />
          </Link>
          <Link href="#">
            <FaInstagram className="text-[#FF708F] dark:text-[#EFC481] text-xl" />
          </Link>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
