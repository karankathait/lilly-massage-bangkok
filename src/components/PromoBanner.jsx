import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-gray-100 h-96 px-6 flex justify-center items-center bg-center" style={{
        backgroundImage: "url('/bg-sample-2.jpg')",
      }}>
      <div className="relative max-w-6xl w-full flex items-center justify-center">
        {/* Left Section: Text Content */}
        <div className="z-10 text-center  lg:mr-8 mb-8 lg:mb-0">
          <h1 className="text-6xl font-bold text-gray-800">Get 20% Off</h1>
          <h2 className="text-4xl font-semibold text-gray-600 mt-2">
            For Your First Visit
          </h2>
          <p className="text-gray-500 mt-4 max-w-md">
            Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor an tempus feugiat dolor undo lacinia cubilia curae.
          </p>
          <button className="mt-6 bg-[#F48380] text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition">
            Book Now
          </button>
        </div>
            

        
        {/* Overlay for a light gradient effect */}
        {/* <div className="absolute inset-0 bg-white opacity-60 rounded-lg"></div> */}
      </div>
    </div>
  );
};

export default PromoBanner;
