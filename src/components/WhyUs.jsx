import React from 'react';

const WHyUs = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img 
            src="flower.jpg" 
            alt="Philosophy Image" 
            className="w-full h-auto object-cover" 
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
          <p className="text-lg text-gray-600 mb-4">
            Mea ei paulo debitis affert nominati usu eu, et ius dicta detraxit probatus facete nusquam.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Mea ei paulo debitis affert nominati usu eu, et ius dicta detraxit probatus facete nusquam deleniti ex nec te sit tale atqui abhorrent luptatum conclusionemque cum quo et wisi ignota semper.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Te est consul graeco.
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                At inermis praesent usu.
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Movet oblique probatus.
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Te est consul graeco.
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                At inermis praesent usu.
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Movet oblique probatus.
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
              Read More
            </button>
            <a href="#!" className="text-pink-500 font-semibold hover:underline flex items-center">
              Contact Us <span className="ml-2">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WHyUs;
