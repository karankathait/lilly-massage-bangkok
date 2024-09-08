// components/Gallery.js

const Gallery = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="josefin-slab-font text-4xl font-bold text-[#EFC481] mb-5">
        Enjoy the difference
      </h2>
      <p className="josefin-sans-font text-gray-600 dark:text-white mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
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
