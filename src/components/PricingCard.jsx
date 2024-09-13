import { useRouter } from "next/navigation";
import React from "react";
import { IoIosFlower } from "react-icons/io";
import { MdOutlineAccessTime, MdPerson } from "react-icons/md";
// data.js
const massageData = [
  {
    title: "Thai Massage",
    priceDetails: [
      { duration: "60", price: "700" },
      { duration: "90", price: "1000" },
      { duration: "120", price: "1200" },
    ],
  },
  {
    title: "Oil Massage",
    priceDetails: [
      { duration: "60", price: "800" },
      { duration: "60", price: "1000" },
      { duration: "90", price: "1400" },
    ],
  },
  {
    title: "Coconut Oil Massage",
    priceDetails: [
      { duration: "60", price: "1100" },
      { duration: "90", price: "1500" },
      { duration: "120", price: "1900" },
    ],
  },
  {
    title: "Aroma Oil",
    priceDetails: [
      { duration: "60", price: "1100" },
      { duration: "90", price: "1500" },
      { duration: "120", price: "1900" },
    ],
  },
  {
    title: "Gold Aroma Oil",
    priceDetails: [
      { duration: "60", price: "1200" },
      { duration: "90", price: "1800" },
      { duration: "120", price: "2000" },
    ],
  },
  {
    title: "4 Hand Oil",
    priceDetails: [
      { duration: "60", price: "1600" },
      { duration: "90", price: "2200" },
      { duration: "120", price: "3000" },
    ],
  },
  {
    title: "Deep Tissue Massage",
    priceDetails: [
      { duration: "60", price: "900" },
      { duration: "90", price: "1200" },
      { duration: "120", price: "1500" },
    ],
  },
];

const PricingCard = () => {
    const router = useRouter()
  return (
    <>
      <div className="dark:bg-black py-10 px-8 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {massageData.map((massage, index) => (
            <div
              key={index}
              className={`border border-[#FF708F] dark:border-[#DEB678] rounded-2xl shadow-lg text-center overflow-hidden`}
            >
              <h3 className="josefin-slab-font text-lg font-semibold flex items-center justify-center gap-1 p-4 text-white bg-[#FF708F] dark:bg-[#DEB678]">
                <span>
                  <IoIosFlower className="w-5 h-5" />
                </span>
                <span>{massage.title}</span>
                <span>
                  <IoIosFlower className="w-5 h-5" />
                </span>
              </h3>
              <div className="p-5">
                <p className="text-gray-500 dark:text-slate-400 mb-4 flex items-center justify-center gap-2">
                  1 / Person{" "}
                  <span>
                    {" "}
                    <MdPerson className="w-5 h-5" />
                  </span>
                </p>
                <div className="mb-5">
                  {massage.priceDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="text-gray-700 dark:text-slate-300 mb-2 flex justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span>
                          <MdOutlineAccessTime className="text-[#FF708F] dark:text-[#DEB678] " />
                        </span>
                        <span>{detail.duration} Minutes</span>
                      </div>
                      <div>
                        <span>{detail.price}</span> TBH
                      </div>
                    </div>
                  ))}
                </div>
                <button
                onClick={() => router.push(`/our-therapists`)}
                  className={`px-5 font-medium py-2 rounded-md text-white bg-[#FF708F] dark:bg-[#DEB678]`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
