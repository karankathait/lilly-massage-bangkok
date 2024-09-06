import Image from 'next/image';

export default function HeroSection1() {
  return (
    <div className='bg-[#f8f4ef]'>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full">
        <Image
          src="/hero-girl-1.png" // Update with the correct image path
          alt="Spa and Beauty Treatment"
          width={600} // Adjust the width and height based on your image size
          height={600}
          className="object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-start">
        <h3 className="text-lg text-[#F48380] italic mb-2">
          Experience Top Expert Services
        </h3>
        <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">
          Spa & Beauty Treatment
        </h1>
        <p className="text-[#555555] mb-6">
          Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa amet.
        </p>
        <p className="text-[#555555] mb-6">
          Cras semper ornare semper.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#F48380] text-white font-medium rounded-md hover:bg-[#a77c5a] transition-colors"
        >
          DISCOVER MORE
        </a>
      </div>
    </div>
    </div>
  );
}
