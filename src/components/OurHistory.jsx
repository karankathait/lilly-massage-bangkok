// components/OurHistory.js

const OurHistory = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
      <div className="lg:w-1/2 p-5">
        <h2 className="cormorant-font text-4xl font-bold text-[#F48380] mb-5">
          Our History
        </h2>
        <p className="montserrat-font text-lg text-gray-700 mb-5">
        Lilly Massage was founded in 2010 with a simple goal: to create a peaceful space where people can experience the healing power of touch. Starting as a small practice, we’ve grown into a trusted wellness center, blending traditional massage techniques with modern approaches to promote relaxation and overall well-being. Over the years, our commitment to personalized care has helped us become a go-to destination for those seeking both physical and mental rejuvenation.
        </p>
        <p className="montserrat-font text-lg text-gray-700 mb-10">
        Our team of skilled therapists is dedicated to providing a personalized experience for every client. We continue to evolve, offering a wide range of services tailored to promote both physical and mental well-being.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col lg:flex-row gap-5">
      <div className="w-1/2">
      <img src="/product-1.jpg" alt="Massage image" className="" />
      </div>
      <div className="w-1/2">
      <img src="/product-2.jpg" alt="Massage image" className="" />
      </div>
        {/* <img src="/product-1.jpg" alt="Massage image" className="w-1/2" />
        <img src="/product-2.jpg" alt="Relaxing bath image" className="" /> */}
      </div>
    </div>
  );
};

export default OurHistory;
