import React from "react";

const Header = () => {
  return (
    <section className="relative h-80 flex items-center justify-center bg-white">
      {/* Background Image with Flowers */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('header-img.jpg')", // Replace with your actual image URL
        }}
      ></div>


      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-4xl font-bold font-serif text-gray-800">About Me</h1>
        <nav className="mt-2">
          <span className="text-red-400">Home</span>
          <span className="mx-2 text-gray-600">-</span>
          <span className="text-red-400">About Me</span>
        </nav>
      </div>
    </section>
  );
};

export default Header;
