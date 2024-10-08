import Image from "next/image";
import React from "react";
import { IoFlower } from "react-icons/io5";

const AboutUs1 = () => {
  return (
    <section className="bg-slate-50 dark:bg-black dark:text-white px-8 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-16">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 md:pr-16 ">
          <h3 className="josefin-slab-font text-[#FF708F] dark:text-[#EFC481] text-2xl font-semibold mb-4">
            <span></span>
            About US
          </h3>
          {/* <h2 className="josefin-slab-font text-4xl text-slate-800 dark:text-white leading-normal">
            At Lilly Massage Bangkok
          </h2> */}
          <h2 className="josefin-slab-font text-4xl text-slate-800 dark:text-white leading-normal">
            At Elegance Spa & Massage
          </h2>
          <p className="text-slate-700 dark:text-gray-300 text-lg mt-4 ">
            We offer exceptional service throughout the Bangkok area with a team
            of professional therapists who are expertly trained and dedicated to
            your well-being. With our commitment to convenience, cleanliness,
            and safety, you can trust in our ability to provide a superior
            massage experience right at your hotel, condominium, residence, or
            home. Let us help you unwind from your busy day without having to
            leave the comfort of your own space.
          </p>

          {/* Features */}
          <div className="space-y-10 mt-8">
            <div className="flex items-start gap-2">
              <div className="w-14 h-14 flex items-center justify-center bg-[#191919] rounded-md border border-[#EFC481] border-opacity-40 transform rotate-45">
                <div className="transform -rotate-45">
                  {/* <Image src="/Spa Flower.png" width={40} height={40} /> */}
                  <IoFlower className="w-6 h-6 text-[#FF708F] dark:text-[#EFC481]" />
                </div>
              </div>

              <div className="ml-4">
                <h4 className="josefin-slab-font text-xl font-semibold">
                  Expert Professionals
                </h4>
                <p className="text-slate-700 dark:text-gray-400">
                  Therapies administered by expert healthcare professionals;
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-14 h-14 flex items-center justify-center bg-[#191919] rounded-md border border-[#EFC481] border-opacity-40 transform rotate-45">
                <div className="transform -rotate-45">
                  {/* <Image src="/Lotus.png" width={30} height={30} /> */}
                  <IoFlower className="w-6 h-6 text-[#FF708F] dark:text-[#EFC481]" />
                </div>
              </div>

              <div className="ml-4">
                <h4 className="josefin-slab-font text-xl font-semibold">
                  Safe Environment
                </h4>
                <p className="text-slate-700 dark:text-gray-400">
                  High-quality treatments provided in a safe, clinical
                  environment;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Experience Badge */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          {/* Image */}
          <img
            src="/about-us-2.jpg"
            alt="Massage Therapy"
            className="w-full h-auto rounded-2xl md:rounded-tl-[20rem]  object-cover border border-[#EFC481]"
          />

          {/* Experience Badge */}
          <div className="absolute bottom-0 md:-bottom-5 left-0 md:-left-10 bg-black rounded-2xl rounded-tr-[5rem] px-3 md:px-10 py-3 md:py-8 border border-[#EFC481] text-center">
            <p className="text-3xl font-bold text-[#FF708F] dark:text-yellow-600">
              12+
            </p>
            <p className="text-lg text-gray-300">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
