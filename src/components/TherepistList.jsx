import React from "react";
import { therapists } from "@/data/therapists";
import { useRouter } from "next/navigation";

const TherepistList = () => {
  const router = useRouter();

  const handleBooking = (therapist) => {
    // Pass the therapist's name and id to the booking page
    router.push(`/booking?therapist=${therapist.name}&id=${therapist.id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {therapists.map((therapist) => (
        <div
          key={therapist.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={therapist.image}
            alt={therapist.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {therapist.name}
            </h2>
            <button
              onClick={() => handleBooking(therapist)}
              className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TherepistList;
