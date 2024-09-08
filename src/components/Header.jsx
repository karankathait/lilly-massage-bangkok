import React from "react";

const Header = ({ title, breadcrumbs }) => {
  return (
    <section className="relative h-80 flex items-center justify-center bg-white">
      {/* Background Image with Flowers */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('header-img-3.jpg')", // Replace with your actual image URL
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative text-center text-white">
        <h1 className="text-5xl font-bold font-serif">{title}</h1>
        <nav className="mt-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index} className="text-white">
              {breadcrumb}
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">-</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Header;
