import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstagramCarousel = () => {
  const images = [
    "/insta-img-1.jpg",
    "/insta-img-2.jpg",
    "/insta-img-3.jpg",
    "/insta-img-4.jpg",
    "/insta-img-5.jpg",
    "/insta-img-6.jpg",
    "/insta-img-7.jpg",
    "/insta-img-8.jpg",
    "/insta-img-9.jpg",
  ];
  const settings = {
    dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5, // Number of images to show in the viewport
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Title */}
      <h3 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Follow On Instagram
      </h3>
      {/* Carousel */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-44 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramCarousel;
