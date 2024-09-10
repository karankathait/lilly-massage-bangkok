import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mark Ramirez",
      position: "Owner of Luna’s Inc",
      quote:
        "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding.",
    },
    {
      name: "Thomas Gala",
      position: "Founder of Zenith Wellness",
      quote:
        "As a fellow creative professional, I have high standards when it comes to design. Kelola not only met but exceeded those standards.",
    },
    {
      name: "Mark Ramirez",
      position: "Owner of Luna’s Inc",
      quote:
        "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding.",
    },
    {
      name: "Mark Ramirez",
      position: "Owner of Luna’s Inc",
      quote:
        "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding.",
    },
    {
      name: "Mark Ramirez",
      position: "Owner of Luna’s Inc",
      quote:
        "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding.",
    },
    {
      name: "Mark Ramirez",
      position: "Owner of Luna’s Inc",
      quote:
        "Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding.",
    },
  ];

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true, // This makes the slider move upward
    verticalSwiping: true,
    centerPadding: "10px",
  };

  return (
    <div className="bg-slate-200 dark:bg-black w-full py-16">
      <div className="max-w-6xl mx-auto bg-white dark:bg-black border dark:border-[#DEB678] p-8 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/testimonial-bg.jpg"
              alt="Nature"
              layout="fill"
              objectFit="cover"
              className="w-full h-full border dark:border-[#DEB678]"
            />
            <div className="absolute">
              <h2 className="text-4xl font-bold">
                Hear From Our <br /> Satisfied Clients
              </h2>
              <p className="text-lg text-gray-600">What they have to say ❤</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute bottom-4 right-0 text-white text-6xl font-semibold z-10">
              10.9K+
            </div>
          </div>

          {/* Right Section - Testimonials Slider */}
          <div className="">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? " bg-slate-50 dark:bg-black border dark:border-[#DEB678] dark:text-white text-slate-800"
                      : "bg-[#FF708F] dark:bg-[#DEB678] text-white  "
                  } p-4 rounded-md relative border my-1`}
                >
                  <div className="flex items-center mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          // className="text-yellow-500"
                          // className={`${
                          //   index === 0 ? "text-white" : "text-[#FF708F] dark:text-[#DEB678]"
                          // }`}
                        />
                      ))}
                  </div>

                  <p className="mb-2">{testimonial.quote}</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bg-[#FF708F] dark:bg-[#DEB678] mt-5 rounded-xl flex items-center justify-between p-4 text-white">
          <p>Are you the next one!</p>
          <button className="px-4 py-2 bg-white text-[#FF708F] dark:text-yellow-600 rounded-md hover:bg-yellow-700 hover:text-white">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
