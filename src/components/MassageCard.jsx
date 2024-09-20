import React from "react";

const MassageCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row py-10 border-b border-slate-200">
      <div className="md:w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover rounded"
        />
      </div>
      <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0 flex flex-col ">
        <h3 className="libre-baskerville-font text-[#FF708F] dark:text-[#EFC481] text-2xl mb-2">
          {title}
        </h3>
        <p
            className="open-sans-font text-[#757575] dark:text-slate-200 mb-5 leading-loose"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {/* <p className="josefin-sans-font text-gray-500 mb-4">{description}</p> */}
        <button className="w-36 py-2 text-sm border border-slate-300 text-[#FF708F] dark:text-[#EFC481]">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default MassageCard;
