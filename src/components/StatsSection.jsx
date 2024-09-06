import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#F9F3F0] mt-10 py-8">
      <div className="container mx-auto flex justify-around items-center border-white border-8 py-16 shadow-lg">
        <div className="flex items-center gap-6">
          <img
            src="path-to-icon-1.svg"
            alt="Years of Experience"
            className=""
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">26+</h2>
            <p className="text-lg text-gray-600">Years of Experience</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img
            src="path-to-icon-2.svg"
            alt="Natural Products"
            className=""
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">100%</h2>
            <p className="text-lg text-gray-600">Natural Products</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img
            src="path-to-icon-3.svg"
            alt="Satisfied Clients"
            className=""
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">56k+</h2>
            <p className="text-lg text-gray-600">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img
            src="path-to-icon-4.svg"
            alt="Specialists Team"
            className=""
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">70+</h2>
            <p className="text-lg text-gray-600">Specialists Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
