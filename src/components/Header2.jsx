import React from "react";
import { FaSpa } from "react-icons/fa"; // Icon similar to the one in the image

const Header2 = () => {
  return (
    <div className="relative flex justify-center items-center h-64">
      {/* Background image */}
      <img
        src="/header-img-2.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark card */}
      <div className="md:w-1/3 relative z-10 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 text-center p-4 rounded-tl-[4rem] rounded-br-[4rem]">
        <div className="py-8 px-10 border border-[#FF708F] dark:border-[#EFC481] rounded-tl-[3rem] rounded-br-[3rem]">
          {/* Icon */}
          <FaSpa className="text-[#FF708F] dark:text-[#EFC481] mx-auto text-2xl mb-2" />

          {/* Title */}
          <h2 className="text-[#FF708F] dark:text-[#EFC481] text-2xl font-semibold">
            Our Therapists
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header2;
