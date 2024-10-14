import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaBars,
  FaTimes,
  FaSpa,
} from "react-icons/fa";
import DarkModeToggle from "@/components/DarkModeToogle.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Default to closed
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => router.pathname === path;

  return (
    <>
      {/* <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-12 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-200">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight animate-pulse">
            Looking for a Skilled Freelancer?
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Lets collaborate on your next project! Drop me a message at{" "}
            <a
              href="mailto:karankathait46@gmail.com"
              className="underline transition duration-300 hover:text-yellow-300 dark:hover:text-yellow-400"
            >
              karankathait46@gmail.com
            </a>
          </p>
          <a
            href="mailto:karankathait46@gmail.com"
            className="inline-block bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500"
          >
            Contact Me Now
          </a>
        </div>
      </header> */}

      <nav className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-black shadow-md">
      {/* <nav className="w-full bg-white dark:bg-black shadow-md"> */}
        <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-8 md:px-0">
          {/* Logo (left-aligned on mobile) */}
          <div className="josefin-slab-font text-2xl font-semibold text-[#FF708F] dark:text-[#DEB678] flex items-center gap-2">
            <span>
              {/* <FaSpa className="w-7 h-7"/> */}
              <img src="./web-icon.png" className="w-10" alt="" />
            </span>
            {/* <span>LILLY MASSAGE</span> */}
            <span>Elegance Spa & Massage</span>
          </div>

          {/* Hamburger Icon (Mobile - right-aligned) */}
          <div
            className="md:hidden text-3xl cursor-pointer text-[#FF708F] dark:text-[#DEB678]"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Nav Links */}
          <div
            className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 top-20 md:top-auto w-full md:w-auto bg-white dark:bg-black md:bg-transparent dark:bg-opacity-80 transition-all duration-300 ease-in-out transform ${
              isOpen ? "opacity-100" : "opacity-0 md:opacity-100 md:flex"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 md:items-center p-6 md:p-0">
              <li className="transition-colors duration-300">
                <Link
                  href="/"
                  className={`${
                    isActive("/")
                      ? "text-[#FF708F] dark:text-[#DEB678]"
                      : "text-black dark:text-white hover:text-[#FF708F] dark:hover:text-[#DEB678]"
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
                      : "text-black dark:text-white hover:text-[#FF708F] dark:hover:text-[#DEB678]"
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
                      : "text-black dark:text-white hover:text-[#FF708F] dark:hover:text-[#DEB678]"
                  }`}
                >
                  Massage & Price
                </Link>
              </li>

              <li className="transition-colors duration-300">
                <Link
                  href="/our-therapists"
                  className={`${
                    isActive("/our-therapists")
                      ? "text-[#FF708F] dark:text-[#DEB678]"
                      : "text-black dark:text-white hover:text-[#FF708F] dark:hover:text-[#DEB678]"
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
                      : "text-black dark:text-white hover:text-[#FF708F] dark:hover:text-[#DEB678]"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                {isOpen && (
                  <div className="flex items-center gap-5 text-xl">
                    <Link href="#">
                      <FaFacebook className="text-[#FF708F] dark:text-[#EFC481] hover:text-[#DEB678] transition-colors duration-300" />
                    </Link>
                    <Link href="#">
                      <FaWhatsapp className="text-[#FF708F] dark:text-[#EFC481] hover:text-[#DEB678] transition-colors duration-300" />
                    </Link>
                    <Link href="#">
                      <FaInstagram className="text-[#FF708F] dark:text-[#EFC481] hover:text-[#DEB678] transition-colors duration-300" />
                    </Link>
                    <DarkModeToggle />
                  </div>
                )}
              </li>
            </ul>

            {/* Social Icons (only on larger screens) */}
            <div className="hidden md:flex items-center space-x-4 text-xl transition-all duration-300 ease-in-out">
              <Link href="#">
                <FaFacebook className="text-[#FF708F] dark:text-[#EFC481] hover:text-[#DEB678] transition-colors duration-300" />
              </Link>
              <Link href="#">
                <FaWhatsapp className="text-[#FF708F] dark:text-[#EFC481] hover:text-[#DEB678] transition-colors duration-300" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-[#FF708F] dark:text-[#EFC481] hover:text-[#DEB678] transition-colors duration-300" />
              </Link>

              <DarkModeToggle />
            </div>
          </div>
        </div>

        {/* Social Icons and DarkModeToggle (Mobile - at the bottom of menu) */}
      </nav>
    </>
  );
};

export default Navbar;
