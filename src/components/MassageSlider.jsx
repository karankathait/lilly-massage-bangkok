import React, { useRef } from "react";
import Slider from "react-slick";
import { massages } from "@/data/massages";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Card Slider component
const MassageSlider = () => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-50 dark:bg-black w-full py-8 px-4 md:px-0">
      <div className="text-center mb-5">
        <h1 className="josefin-slab-font text-4xl font-medium text-[#FF708F] dark:text-[#EFC481] mb-2">
          Our Products
        </h1>
        <p className="josefin-sans-font text-slate-700 dark:text-slate-200 text-xl">
          The Best Services for you
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {massages.map((card, index) => (
            <div key={index} className="p-3">
              <div
                style={{
                  backgroundImage: `url(${card.image})`, // Background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[500px] relative bg-white overflow-hidden group" // Added 'group' to control hover effect
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 p-4 bg-[#ff708fdc] dark:bg-[#efc581e5] text-center text-white">
                  <h3 className="libre-baskerville-font text-2xl font-medium mb-1">
                    {card.title}
                  </h3>
                  <p
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: card.shortDescription }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-4 mt-2">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-2 bg-[#FF708F] dark:bg-[#EFC481] text-white rounded-full hover:bg-pink-600 transition"
          >
            <GrFormPrevious className="w-7 h-7" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2 bg-[#FF708F] dark:bg-[#EFC481] text-white rounded-full hover:bg-pink-600 transition"
          >
            <GrFormNext className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MassageSlider;
