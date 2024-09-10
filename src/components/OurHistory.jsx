// components/OurHistory.js

const OurHistory = () => {
  return (
    <div className=" py-10 text-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h2 className="josefin-slab-font text-[#FF708F] dark:text-[#EFC481] text-4xl font-semibold mb-4">
            Our History
          </h2>
          <div className="roboto-condensed-font text-slate-800 dark:text-slate-200 md:pr-10 text-lg">
            <p className="mb-4">
              Founded in 2010, Lilly Massage set out to provide exceptional
              massage therapy right to your doorstep. What began with a small,
              passionate team has evolved into a leading provider of home-based
              massage services, known for our personalized approach and quality.
            </p>
            <p className="mb-4">
              Over the years, we’ve expanded our team and services, adapting to
              meet your needs. Our mission is to offer not just a massage but a
              complete wellness experience that enhances your relaxation and
              well-being.
            </p>
            <p className="">
              We’re proud of our journey and grateful for your support. Thank
              you for choosing us, and we look forward to continuing to serve
              you with excellence.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col lg:flex-row gap-5">
          <div className="w-1/2">
            <img src="/product-1.jpg" alt="Massage image" className="border border-[#FF708F] dark:border-[#EFC481] rounded-lg" />
          </div>
          <div className="w-1/2">
            <img src="/product-2.jpg" alt="Massage image" className="border border-[#FF708F] dark:border-[#EFC481] rounded-lg" />
          </div>
          {/* <img src="/product-1.jpg" alt="Massage image" className="w-1/2" />
        <img src="/product-2.jpg" alt="Relaxing bath image" className="" /> */}
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
