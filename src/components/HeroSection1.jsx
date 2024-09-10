// import Image from 'next/image';

// export default function HeroSection1() {
//   return (
//     <div className='bg-[#f8f4ef]'>
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
//       {/* Left Image Section */}
//       <div className="lg:w-1/2 w-full">
//         <Image
//           src="/hero-girl-1.png" // Update with the correct image path
//           alt="Spa and Beauty Treatment"
//           width={600} // Adjust the width and height based on your image size
//           height={600}
//           className="object-cover"
//         />
//       </div>

//       {/* Right Content Section */}
//       <div className="lg:w-1/2 w-full flex flex-col justify-center items-start">
//         <h3 className="text-lg text-[#F48380] italic mb-2">
//           Experience Top Expert Services
//         </h3>
//         <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">
//           Spa & Beauty Treatment
//         </h1>
//         <p className="text-[#555555] mb-6">
//           Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa amet.
//         </p>
//         <p className="text-[#555555] mb-6">
//           Cras semper ornare semper.
//         </p>
//         <a
//           href="#"
//           className="inline-block px-6 py-3 bg-[#F48380] text-white font-medium rounded-md hover:bg-[#a77c5a] transition-colors"
//         >
//           DISCOVER MORE
//         </a>
//       </div>
//     </div>
//     </div>
//   );
// }




import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const HeroSection1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  const bgImages = [
    '/hero-bg-1.jpg', // Replace with your image paths
    '/hero-bg-2.jpg',
    '/hero-bg-3.jpg',
  ];

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings}>
        {bgImages.map((image, index) => (
          <div key={index} className="relative w-full h-screen">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="max-w-6xl mx-auto relative z-10 flex flex-col justify-center h-full text-left text-white px-8 lg:px-0 ">
                <h2 className="josefin-slab-font text-4xl text-[#FF708F] dark:text-[#EFC481]">Welcome to</h2>
                <h1 className="josefin-sans-font text-5xl font-bold mt-2">
                  Nurturing Your Soul <br /> with Every Massage
                </h1>
                <p className="josefin-slab-font text-lg mt-4 text-[#D7D6D6] ">
                  Revitalize Your Senses in a Timeless Setting. Experience the <br /> Healing Touch of Tradition.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-5">
                  <button className="bg-[#FF708F]  text-white dark:bg-[#1E1A12] border border-[#FF708F] dark:border-[#DEB678] px-6 py-3  dark:text-[#DEB678] font-medium hover:bg-yellow-700">
                    Book Now
                  </button>
                  <button className="bg-[#FF708F]  text-white dark:bg-[#1E1A12] border border-[#FF708F] dark:border-[#DEB678] px-6 py-3  dark:text-[#DEB678] font-medium hover:bg-yellow-700">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection1;
