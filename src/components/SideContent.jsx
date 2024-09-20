import React from "react";

const SideContent = () => {
  const images = [
    "/insta-img-1.jpg",
    "/insta-img-2.jpg",
    "/insta-img-3.jpg",
    "/insta-img-4.jpg",
    "/insta-img-5.jpg",
    "/insta-img-6.jpg",
    "/insta-img-7.jpg",
    "/insta-img-8.jpg",
    "/insta-img-9.jpg",
  ];

  const posts = [
    {
      title: "Relaxing Spa Treatments",
      date: "October 20, 2023",
      imageUrl: "/gallery-2.jpg", // replace with actual image
    },
    {
      title: "Healing Massage Therapy",
      date: "October 20, 2023",
      imageUrl: "/gallery-5.jpg", // replace with actual image
    },
    {
      title: "Aromatherapy Benefits",
      date: "October 19, 2023",
      imageUrl: "hero-bg-11.jpg", // replace with actual image
    },
  ];

  return (
    <>
      <div className="border p-6 mb-6 text-center">
        <h3 className="uppercase text-sm text-gray-500 mb-4">About Us</h3>
        <img
          src="/why-us-1.jpg"
          alt="About Me"
          className="w-full h-auto object-cover mb-4 rounded"
        />
        <h4 className="text-lg font-semibold text-[#FF708F] dark:text-[#EFC481]">
          Lilly Massage Bangkok
        </h4>
        <p className="text- text-gray-700 dark:text-slate-200 my-4">
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

      <div className="shadow-lg border p-6 text-center mb-8">
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

      {/* First Box */}
      <div className="border border-gray-200 p-4 mb-8">
        <p className="text-center text-sm font-semibold text-gray-500 mb-2">
          BANNER
        </p>
        <div className="relative">
          <img
            src="banner-1.jpg" // replace with your image
            alt="Banner"
            className="object-cover w-full"
          />
        </div>
      </div>

      {/* Second Box */}
      <div className="border border-gray-200 p-4 mb-8">
        <p className="text-center text-sm font-semibold text-gray-500 mb-2">
          PROMO BOX
        </p>
        <div className="relative">
          <img
            src="banner-2.jpg" // replace with your image
            alt="Promo Box"
            className="object-cover w-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-md">
              LILLY MASSAGE
            </span>
          </div>
        </div>
      </div>

      {/* latest posts */}
      <div className="border border-gray-200 p-4">
        <h3 className="text-center font-semibold uppercase text-sm text-gray-500 mb-4">
          LATEST POSTS
        </h3>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-24 h-24 object-cover border border-gray-200"
              />
              <div>
                <h4 className="text-md font-semibold text-gray-700">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideContent;
