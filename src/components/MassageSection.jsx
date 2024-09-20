import React from "react";
import MassageCard from "./MassageCard";
import { massages } from "../data/massages";
import SideContent from "./SideContent";
const articles = [
  {
    image: "path/to/image.jpg",
    title: "Healthy Breakfast Meals",
    date: "October 20, 2023",
    author: "Lucid Themes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur metus aliquam lacus bibendum, non sollicitudin diam dignissim.",
  },
  // Add more articles here
];

const MassageSection = () => {
  return (
    <div className="bg-white dark:bg-black px-8">
      {/* Title */}
      <div className="text-center py-8">
        <h1 className="josefin-slab-font text-4xl md:text-5xl font-medium text-[#FF708F] dark:text-[#EFC481] mb-2">
          Our Services
        </h1>
        <p className="josefin-sans-font text-slate-700 dark:text-slate-200 text-xl">
        Massages we provide
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="col-span-3">
          {massages.map((massage, index) => (
            <MassageCard
              key={index}
              image={massage.image}
              title={massage.title}
              description={massage.description}
            />
          ))}
        </div>
        <div className="hidden md:block">
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default MassageSection;
