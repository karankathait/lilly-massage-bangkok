import React from "react";
import { FaBusinessTime, FaLeaf } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const StatsSection = () => {
  return (
    <section className="bg-[#F9F3F0] dark:bg-black py-8">
      <div className="max-w-6xl mx-auto flex justify-around items-center border-white border-8 py-16 shadow-lg">
        <div className="flex items-center gap-6">
        <FaBusinessTime className="w-12 h-12 text-[#EFC481]"/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">26+</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">Years of Experience</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
        <FaLeaf className="w-12 h-12 text-[#EFC481]"/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">100%</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">Natural Products</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
        <MdPeople className="w-12 h-12 text-[#EFC481]"/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">56k+</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
        <RiTeamFill className="w-12 h-12 text-[#EFC481]"/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">70+</h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">Specialists Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
