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
    <div className="bg-white px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-5">
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
