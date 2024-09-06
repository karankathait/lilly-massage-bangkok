// components/Gallery.js

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto text-center p-10">
      <h2 className="cormorant-font text-4xl font-bold text-red-500 mb-5">
        Enjoy the difference
      </h2>
      <p className="text-gray-600 mb-10 montserrat-font">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex gap-8">
        <div className="flex flex-col gap-8">
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
        <div className="flex flex-col gap-8">
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

        <div className="flex flex-col gap-8">
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
  );
};

export default Gallery;
