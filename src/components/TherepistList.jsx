import React from "react";
import { therapists } from "@/data/therapists";
import { useRouter } from "next/navigation";

const TherepistList = () => {
  const router = useRouter();

  const handleBooking = (therapist) => {
    router.push(`/booking?therapist=${therapist.name}&id=${therapist.id}`);
  };

  return (
    <div className="bg-slate-100 dark:bg-black">
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {therapists.map((therapist) => (
          <div
            key={therapist?.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-black dark:text-white border border-[#DEB678]"
          >
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src={therapist?.image}
                alt="Card image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">Smile</h2>
              <p className="text-sm">7 Years of Experience</p>
              <button
                onClick={() =>
                  router.push(
                    `/booking/therapist=${therapist?.name}&id=${therapist.id}`
                  )
                }
                className="mt-4 text-yellow-500 underline"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherepistList;
