import React from "react";
import { TiTick } from "react-icons/ti";

const WHyUs = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="flower.jpg"
            alt="Philosophy Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="cormorant-font text-5xl text-[#F48380] font-semibold mb-8">
          MASSAGE SERVICES
          </h2>
          <p className="montserrat-font text-xl text-gray-600 mb-8">
            At The Lilly Massage Bangkok We service in the Bangkok area by
            professional therapists who have been well and efficiently trained.
            With the readiness for service, you can be confident in the
            convenience, cleanliness, and safety of the accommodation room in
            the hotel, condominium, residence, or your house. We will relieve
            you from the exhausting work without moving from your house or
            living place.
          </p>
          

          <div className="grid grid-cols-2 gap-4  text-gray-600 mb-6">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#F48380] mr-2"><TiTick /></span>
                Te est consul graeco.
              </li>
              <li className="flex items-center">
                <span className="text-[#F48380] mr-2"><TiTick /></span>
                At inermis praesent usu.
              </li>
              <li className="flex items-center">
                <span className="text-[#F48380] mr-2"><TiTick /></span>
                Movet oblique probatus.
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#F48380] mr-2"><TiTick /></span>
                Te est consul graeco.
              </li>
              <li className="flex items-center">
                <span className="text-[#F48380] mr-2"><TiTick /></span>
                At inermis praesent usu.
              </li>
              <li className="flex items-center">
                <span className="text-[#F48380] mr-2"><TiTick /></span>
                Movet oblique probatus.
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#F48380] text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
              Read More
            </button>
            <a
              href="#!"
              className="text-[#F48380] font-semibold hover:underline flex items-center"
            >
              Contact Us <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WHyUs;
