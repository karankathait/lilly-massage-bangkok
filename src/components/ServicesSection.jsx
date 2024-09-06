import React from 'react';

const services = [
    { title: 'Manicure & Pedicure', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum mut.', icon: '/service-logo-1.png' },
    { title: 'Haircut & Styling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum mut.', icon: '/service-logo-1.png' },
    { title: 'Supreme Skincare', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum mut.', icon: '/service-logo-1.png' },
    { title: 'Body Treatments', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum mut.', icon: '/service-logo-1.png' },
    { title: 'Relaxing Massage', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum mut.', icon: '/service-logo-1.png' },
    { title: 'Thermal Bath', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum mut.', icon: '/service-logo-1.png' },
  ];
  

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg text-red-600 font-semibold uppercase mb-2">Services</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">The best for you</h3>
        <p className="text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg  text-center">
              <div className="mb-4 text-red-600">
                <img src={service.icon} alt={service.title} className="mx-auto w-16 h-16"/>
              </div>
              <h4 className="cormorant-font text-2xl font-semibold mb-2 text-gray-800">{service.title}</h4>
              <p className="montserrat-font text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
