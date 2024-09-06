import React from 'react';

const WellnessTherapy = () => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center flex items-center" style={{ backgroundImage: 'url(/bg-sample.jpg)' }}>
      <div className="container mx-auto text-left md:text-left px-6 md:px-12">
        {/* Text Section */}
        <div className="max-w-md">
          <div className="text-red-400 text-sm font-semibold uppercase mb-2">
            Sweet & Healthy Food
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Wellness therapy
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#!" className="inline-block text-red-400 font-semibold border border-red-400 px-6 py-2  hover:bg-red-400 hover:text-white transition duration-300">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default WellnessTherapy;
