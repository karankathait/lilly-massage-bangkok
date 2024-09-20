// import React from "react";
// import { therapists } from "@/data/therapists";
// import { useRouter } from "next/navigation";

// const TherepistList = () => {
//   const router = useRouter();

//   const handleBooking = (therapist) => {
//     router.push(`/booking?therapist=${therapist.name}&id=${therapist.id}`);
//   };

//   return (
//     <div className="bg-slate-100 dark:bg-black">
//       <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
//         {therapists.map((therapist) => (
//           <div
//             key={therapist?.id}
//             className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-black dark:text-white border border-[#DEB678]"
//           >
//             <div className="relative">
//               <img
//                 className="w-full h-64 object-cover"
//                 src={therapist?.image}
//                 alt="Card image"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">Smile</h2>
//               <p className="text-sm">7 Years of Experience</p>
//               <button
//                 onClick={() =>
//                   router.push(
//                     `/booking?therapist=${therapist.name}&id=${therapist.id}`
//                   )
//                 }
//                 className="mt-4 text-yellow-500 underline"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TherepistList;

import React from "react";
import { therapists } from "@/data/therapists";
import { useRouter } from "next/navigation";
import bgImage from "../../public/flower-bg.png";
const TherepistList = () => {
  const router = useRouter();

  const handleBooking = (therapist) => {
    router.push(`/booking?therapist=${therapist.name}&id=${therapist.id}`);
  };

  return (
    <div className="bg-slate-50 dark:bg-black py-10 px-8 md:px-0">
      <div className="text-center mb-8">
        <h1 className="josefin-slab-font text-4xl md:text-5xl font-medium text-[#FF708F] dark:text-[#EFC481] mb-2">
          Our Therapists
        </h1>
        <p className="josefin-sans-font text-slate-700 dark:text-slate-200 text-xl">
          Meet the Professionals Who Care for You
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {therapists.map((therapist) => (
          <div
            key={therapist?.id}
            className="bg-white overflow-hidden shadow text-center"
          >
            <div className="relative">
              {/* Therapist Image */}
              <img
                className="w-full h-64 object-cover"
                src={therapist?.image}
                alt={`${therapist?.name}'s profile`}
              />
            </div>
            {/* Therapist Info */}
            <div
              className="p-4 bg-cover bg-center"
              style={{
                backgroundImage: "url('flower-bg.png')",
              }}
            >
              <h2 className="josefin-slab-font text-xl md:text-2xl font-medium text-slate-600 ">
                {therapist?.name}
              </h2>
              <p className="mb-2 text-lg text-[#FF708F] dark:text-[#EFC481]">
                Spa Master
              </p>
              {/* Booking Button */}
              <button
                onClick={() => handleBooking(therapist)}
                className="rounded text-white p-2 px-5 bg-[#FF708F] dark:bg-[#EFC481]"
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
