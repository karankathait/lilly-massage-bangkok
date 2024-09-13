import React from "react";
import Slider from "react-slick";

// Card Slider component
const MassageSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

  // Data for cards
  const cards = [
    {
      image: "/path/to/relaxing-massage.jpg",
      title: "Thai Massage",
      description:
        "Thai massage is another popular kneading and rubdown technique among all. It can be extremely painful for those who do not have any prior experience. <br /> You will find your body being twisted in many awkward   positions tht may make you scream out in pain, but in the end you will not only feel totally relaxed and your body will feel supple and light",
    },
    {
      image: "/path/to/deep-tissue-massage.jpg",
      title: "Deep Tissue Massage",
      description: "Target deep muscle layers to relieve stress and tension.",
    },
    {
      image: "/path/to/hot-stone-massage.jpg",
      title: "Hot Stone Massage",
      description:
        "Enjoy the warmth of heated stones that ease muscle stiffness.",
    },
    {
      image: "/path/to/aromatherapy-massage.jpg",
      title: "Aromatherapy Massage",
      description:
        "Immerse in calming essential oils to balance body and mind.",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3">
        {/* <Slider {...settings}> */}
          {cards.map((card, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-green-100 text-center">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default MassageSlider;
