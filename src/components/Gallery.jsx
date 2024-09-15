const Gallery = () => {
  return (
    <div className="bg-white dark:bg-black py-10 px-8 md:px-0">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="josefin-slab-font text-5xl font-medium text-[#FF708F] dark:text-[#EFC481] mb-2">
          Enjoy the difference
        </h2>
        <p className="josefin-sans-font text-slate-700 dark:text-slate-200 text-xl">
          Experience the Art of Relaxation and Rejuvenation
        </p>
        </div>
        <div className="flex gap-4  md:gap-8">
          <div className="flex flex-col gap-4  md:gap-8">
            <img
              src="/gallery-1.jpg"
              alt="Spa image 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/gallery-5.jpg"
              alt="Spa image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4  md:gap-8">
            <img
              src="/gallery-2.jpg"
              alt="Spa image 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/gallery-4.jpg"
              alt="Spa image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4  md:gap-8">
            <img
              src="/gallery-3.jpg"
              alt="Spa image 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="/gallery-6.jpg"
              alt="Spa image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
