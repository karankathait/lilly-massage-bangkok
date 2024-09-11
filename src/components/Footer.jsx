import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 dark:bg-black py-10 border-t border-t-[#FF708F] dark:border-[#EFC481]">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#FF708F] dark:text-[#EFC481] ">Lilly Massage Bangkok.</h2>
          <p className="text-sm">
            SPA & Wellness Center
          </p>
          <p className="text-sm text-gray-600">
            Eam ut appareat constituto, has te case perfecto. Sit vocent senserit no, te vel graeci delectus, ignota suavitate constituto vel ad.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="#!" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        {/* Column 2: Contacts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Contacts</h3>
          <p className="text-sm text-gray-600">
            <i className="fas fa-map-marker-alt mr-2"></i>
            455 Wallstreet St., New York, VA 12364, USA
          </p>
          <p className="text-sm text-gray-600">
            <i className="fas fa-envelope mr-2"></i>
            email@example.com
          </p>
          <p className="text-sm text-gray-600">
            <i className="fas fa-phone mr-2"></i>
            800 123 456 78
          </p>
          <p className="text-sm text-gray-600">
            <i className="fas fa-phone mr-2"></i>
            800 123 456 79
          </p>
        </div>
        
        {/* Column 3: Category */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Category</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#!" className="hover:text-gray-900">Stone Massage</a></li>
            <li><a href="#!" className="hover:text-gray-900">Aroma Tea Therapy</a></li>
            <li><a href="#!" className="hover:text-gray-900">Waxing</a></li>
            <li><a href="#!" className="hover:text-gray-900">Body Treatments</a></li>
            <li><a href="#!" className="hover:text-gray-900">Hands & Feet</a></li>
          </ul>
        </div>
        
        {/* Column 4: Recent Posts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img src="/path-to-image-1.jpg" alt="Post Image" className="w-16 h-16 rounded object-cover mr-4" />
              <div>
                <a href="#!" className="text-sm font-semibold text-gray-900 hover:text-gray-700">Spa treatments for you at home</a>
                <p className="text-xs text-gray-600">11 Apr, 2024</p>
              </div>
            </li>
            <li className="flex items-center">
              <img src="/path-to-image-2.jpg" alt="Post Image" className="w-16 h-16 rounded object-cover mr-4" />
              <div>
                <a href="#!" className="text-sm font-semibold text-gray-900 hover:text-gray-700">Speed Cleaning Tips From Cleaners</a>
                <p className="text-xs text-gray-600">11 Apr, 2024</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-t-[#FF708F] dark:border-[#EFC481] border-gray-200 pt-6 text-center text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
          <p>Copyright © 2024 Lilly Massage. All Rights Reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><a href="#!" className="hover:text-gray-900">Home</a></li>
            <li><a href="#!" className="hover:text-gray-900">About</a></li>
            <li><a href="#!" className="hover:text-gray-900">Services</a></li>
            <li><a href="#!" className="hover:text-gray-900">Pages</a></li>
            <li><a href="#!" className="hover:text-gray-900">News</a></li>
            <li><a href="#!" className="hover:text-gray-900">Contacts</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
