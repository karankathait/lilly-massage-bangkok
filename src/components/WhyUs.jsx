import React from "react";
import { TiTick } from "react-icons/ti";

const WHyUs = () => {
  return (
    <section className="bg-white dark:bg-black md:py-8 px-8 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 overflow-hidden">
          <img
            src="why-us-2.jpg"
            alt="Philosophy Image"
            className="object-cover rounded-xl border dark:border-[#EFC481] border-opacity-50"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 border dark:border-[#EFC481] md:absolute md:right-20 p-4 md:p-10 bg-slate-50 dark:bg-black rounded-2xl md:rounded-tr-[10rem]">
          <h2 className="josefin-slab-font text-[#FF708F] dark:text-[#EFC481] text-4xl font-semibold mb-4">
            Why Us
          </h2>
          <p className="roboto-condensed-font text-slate-800 dark:text-slate-200 mb-6 md:text-lg">
            At Lilly Massage, we offer a personalized and convenient massage
            experience tailored to your unique needs. Our team of expert
            therapists brings years of experience to ensure you receive
            top-quality care right in the comfort of your home. We provide a
            variety of treatments designed to enhance your well-being, from deep
            tissue to relaxation massages. Our commitment to excellence and
            client satisfaction means you can trust us to deliver exceptional
            service every time.
          </p>

          <div className="roboto-condensed-font grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-600 dark:text-slate-200 mb-6 md:text-lg">
            {/* <div> */}
            <p className="flex items-center gap-2">
              <span className="text-[#FF708F] dark:text-[#EFC481]">
                <TiTick />
              </span>
              Personalized Care.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF708F] dark:text-[#EFC481]">
                <TiTick />
              </span>
              Time-saving.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF708F] dark:text-[#EFC481]">
                <TiTick />
              </span>
              Privacy.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF708F] dark:text-[#EFC481]">
                <TiTick />
              </span>
              Convenience.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF708F] dark:text-[#EFC481]">
                <TiTick />
              </span>
              Flexibility.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF708F] dark:text-[#EFC481]">
                <TiTick />
              </span>
              Relaxation.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#FF708F] dark:bg-[#DEB678] text-white border border-[#DEB678] px-6 py-3   font-medium hover:bg-yellow-700">
              See All Therapists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WHyUs;
