import React from "react";

const SideContent = () => {
  const images = [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
    "path/to/image4.jpg",
    "path/to/image5.jpg",
    "path/to/image6.jpg",
    "path/to/image7.jpg",
    "path/to/image8.jpg",
  ];

  return (
    <>
      <div className="border p-6 mb-6 text-center mt-10">
        <h3 className="uppercase text-sm text-gray-500 mb-4">About Us</h3>
        <img
          src="path/to/image.jpg"
          alt="About Me"
          className="w-full h-auto object-cover mb-4 rounded"
        />
        <h4 className="text-lg font-semibold text-blue-600">
          Lilly Massage Bangkok
        </h4>
        <p className="text-sm text-gray-700 my-4">
          Our expert therapists offer top-notch service across Bangkok. Enjoy
          professional, clean, and safe treatments in the comfort of your hotel,
          condo, or home. Relax and rejuvenate without leaving your place.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Replace with icons for actual social links */}
          <a href="#">
            <i className="fab fa-facebook-f text-gray-500"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter text-gray-500"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest text-gray-500"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-gray-500"></i>
          </a>
        </div>
      </div>

      <div className="shadow-lg border p-6 text-center">
        <h3 className="uppercase text-sm text-gray-500 mb-4">Instagram</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Instagram ${index}`}
              className="w-full h-auto object-cover rounded"
            />
          ))}
        </div>
        <button className="border border-gray-500 px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200">
          <i className="fab fa-instagram mr-2"></i>Follow on Instagram
        </button>
      </div>
    </>
  );
};

export default SideContent;
