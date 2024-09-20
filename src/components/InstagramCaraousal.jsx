// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const InstagramCarousel = () => {
//   const images = [
//     "/insta-img-1.jpg",
//     "/insta-img-2.jpg",
//     "/insta-img-3.jpg",
//     "/insta-img-4.jpg",
//     "/insta-img-5.jpg",
//     "/insta-img-6.jpg",
//     "/insta-img-7.jpg",
//     "/insta-img-8.jpg",
//     "/insta-img-9.jpg",
//   ];
//   const settings = {
//     dots: false,
//   infinite: true,
//   speed: 1000,
//   slidesToShow: 5, // Number of images to show in the viewport
//   slidesToScroll: 1,
//   autoplay: true, // Enable autoplay
//   autoplaySpeed: 1000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-8">
//       {/* Title */}
//       <h3 className="text-center text-lg font-semibold text-gray-700 mb-4">
//         Follow On Instagram
//       </h3>
//       {/* Carousel */}
//       <Slider {...settings}>
//         {images.map((src, index) => (
//           <div key={index} className="px-2">
//             <img
//               src={src}
//               alt={`Instagram post ${index + 1}`}
//               className="w-full h-44 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default InstagramCarousel;

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

  const quotes = [
    "Stay inspired!",
    "Dream big!",
    "Live life!",
    "Capture moments!",
    "Stay positive!",
    "Embrace creativity!",
    "Adventure awaits!",
    "Make it happen!",
    "Explore the world!",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="bg-slate-50 dark:bg-black py-8 px-8 md:px-0">
      <div className="max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="josefin-slab-font text-4xl md:text-5xl font-medium text-[#FF708F] dark:text-[#EFC481] mb-2">
          Instagram
        </h1>
        <p className="josefin-sans-font text-slate-700 dark:text-slate-200 text-xl">
        Follow On Instagram
        </p>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative group px-2">
            <img
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="w-full md:h-44 object-cover rounded-lg"
            />
            {/* Overlay with Quote/Instagram Logo */}
            <div className="absolute inset-0 mx-2 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              {/* <p className="text-white text-lg font-semibold text-center">
                {quotes[index % quotes.length]}
              </p> */}
              {/* Optional: Instagram logo */}
              
              <img src="/instagram.png" alt="Instagram" className="w-16 h-16" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default InstagramCarousel;
