import React from "react";
import { TiTick } from "react-icons/ti";

const WHyUs = () => {
  return (
    <section className="bg-white dark:bg-black py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 overflow-hidden">
          <img
            src="why-us-2.jpg"
            alt="Philosophy Image"
            className="object-cover rounded-xl border border-[#EFC481] border-opacity-50"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="josefin-slab-font text-[#EFC481] text-4xl font-semibold mb-4">
            Why Us
          </h2>
          <p className="roboto-condensed-font text-slate-800 dark:text-slate-200 mb-5 text-lg">
            At Lilly Massage, we offer a personalized and convenient massage
            experience tailored to your unique needs. Our team of expert
            therapists brings years of experience to ensure you receive
            top-quality care right in the comfort of your home. We provide a
            variety of treatments designed to enhance your well-being, from deep
            tissue to relaxation massages. Our commitment to excellence and
            client satisfaction means you can trust us to deliver exceptional
            service every time.
          </p>

          <div className="roboto-condensed-font grid grid-cols-2 gap-4 text-gray-600 dark:text-slate-200 mb-6 text-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Personalized Care.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Expert Therapists.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Convenience.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Privacy.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Time-saving.
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Comprehensive Wellness.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Commitment to Quality.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Exceptional Customer Service.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Flexibility.
              </li>
              <li className="flex items-center">
                <span className="text-[#EFC481] mr-2">
                  <TiTick />
                </span>
                Relaxation.
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#DEB678] text-white dark:bg-[#1E1A12] border border-[#DEB678] px-6 py-3  dark:text-[#DEB678] font-medium hover:bg-yellow-700">
              See All Therapists
            </button>
            {/* <a
              href="#!"
              className="text-[#EFC481] font-semibold hover:underline flex items-center"
            >
              Contact Us 
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WHyUs;
