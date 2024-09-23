import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdCall, MdLocationOn, MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black py-10 border-t border-t-[#FF708F] dark:border-[#EFC481]">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
        <div className="josefin-slab-font text-2xl font-semibold text-[#FF708F] dark:text-[#DEB678] flex items-center gap-2">
          <span>
            {/* <FaSpa className="w-7 h-7"/> */}
            <img src="./web-icon.png" className="w-10" alt="" />
          </span>
          {/* <span>LILLY MASSAGE</span> */}
          <span>Elegance Spa & Massage</span>
        </div>
          {/* <h2 className="text-2xl font-bold text-[#FF708F] dark:text-[#EFC481] ">
            Lilly Massage Bangkok.
          </h2> */}
          <p className="text-slate-600 dark:text-slate-200">
            SPA & Wellness Center
          </p>
          <p className="text-slate-600 dark:text-slate-200">
            Eam ut appareat constituto, has te case perfecto. Sit vocent
            senserit no, te vel graeci delectus, ignota suavitate constituto vel
            ad.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            {/* <a href="#!" className="text-gray-600 hover:text-gray-900">
            <FaInstagram />
            </a> */}
            <a href="#!" className="text-[#FF708F] dark:text-[#EFC481] ">
              <FaFacebook />
            </a>
            <a href="#!" className="text-[#FF708F] dark:text-[#EFC481] ">
              <FaInstagram />
            </a>
            <a href="#!" className="text-[#FF708F] dark:text-[#EFC481] ">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* Column 2: Contacts */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF708F] dark:text-[#EFC481]">
            Contacts
          </h3>
          <p className="flex items-center gap-2 text-gray-600 dark:text-slate-200">
            <MdLocationOn />
            455 Wallstreet St., New York, VA 12364, USA
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-slate-200">
            <MdOutlineMail />
            email@example.com
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-slate-200">
            <MdCall />
            800 123 456 78
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-slate-200">
            <MdCall />
            800 123 456 79
          </p>
        </div>

        {/* Column 3: Category */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF708F] dark:text-[#EFC481]">
            Category
          </h3>
          <ul className="text-gray-600 dark:text-slate-200 space-y-2">
            <li>
              <a
                href="#!"
                className="hover:text-gray-900 dark:hover:text-slate-400"
              >
                Stone Massage
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="hover:text-gray-900 dark:hover:text-slate-400"
              >
                Aroma Tea Therapy
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="hover:text-gray-900 dark:hover:text-slate-400"
              >
                Waxing
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="hover:text-gray-900 dark:hover:text-slate-400"
              >
                Body Treatments
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="hover:text-gray-900 dark:hover:text-slate-400"
              >
                Hands & Feet
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Recent Posts */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF708F] dark:text-[#EFC481]">
            Recent Posts
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src="/insta-img-9.jpg"
                alt="Post Image"
                className="w-16 h-16 rounded object-cover mr-4"
              />
              <div>
                <a
                  href="#!"
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700 dark:text-slate-200"
                >
                  Spa treatments for you at home
                </a>
                <p className="text-xs text-gray-600 dark:text-slate-400">11 Apr, 2024</p>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src="/insta-img-7.jpg"
                alt="Post Image"
                className="w-16 h-16 rounded object-cover mr-4"
              />
              <div>
                <a
                  href="#!"
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700 dark:text-slate-200"
                >
                  Speed Cleaning Tips From Cleaners
                </a>
                <p className="text-xs text-gray-600 dark:text-slate-400">11 Apr, 2024</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-t-[#FF708F] dark:border-[#EFC481] border-gray-200 pt-6 text-center text-sm text-gray-600 dark:text-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
          <p>Copyright © 2024 Lilly Massage. All Rights Reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#!" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-900">
                Pages
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-900">
                News
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-900">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
