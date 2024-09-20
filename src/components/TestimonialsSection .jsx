import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Sophia Martinez",
      role: "Spa Enthusiast",
      text: "The call-out massage was exceptional. The therapist was professional, attentive, and the entire session left me feeling deeply relaxed. I would highly recommend this service!",
      rating: 5,
      date: "28 NOV",
      imageUrl: "./profile-pic-1.jpg",
    },
    {
      name: "Michael Thompson",
      role: "Fitness Trainer",
      text: "I’ve had several massages, but this spa’s service truly stands out. The therapist addressed all my tension areas, and I felt rejuvenated. The ambiance and professionalism were top-notch.",
      rating: 5,
      date: "26 NOV",
      imageUrl: "./profile-pic-3.jpg",
    },
    {
      name: "Emily Davis",
      role: "Wellness Blogger",
      text: "From the moment the therapist arrived, I knew I was in good hands. The massage was perfectly tailored to my needs, and the attention to detail was outstanding. I can’t wait for my next session.",
      rating: 5,
      date: "20 NOV",
      imageUrl: "./profile-pic-2.jpg",
    },
    {
      name: "Liam Johnson",
      role: "Corporate Executive",
      text: "The massage was fantastic! The therapist was skilled and provided a perfect blend of relaxation and therapeutic relief. The service exceeded my expectations, and I felt revitalized afterward.",
      rating: 5,
      date: "15 SEP",
      imageUrl: "./profile-pic-5.jpg",
    },
    {
      name: "Olivia Smith",
      role: "Yoga Instructor",
      text: "This spa experience was exceptional. The therapist’s expertise was evident, and the ambiance was calming. I felt thoroughly relaxed and energized after the session. Highly recommend!",
      rating: 5,
      date: "10 SEP",
      imageUrl: "./profile-pic-4.jpg",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-5">
          <h1 className="josefin-slab-font text-5xl font-medium text-[#FF708F] dark:text-[#EFC481] mb-2">
            Testimonials
          </h1>
          <p className="josefin-sans-font text-slate-700 dark:text-slate-200 text-xl">
            Hear From Our Satisfied Clients
          </p>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-3">
              <div className="bg-white dark:bg-[#151515] shadow rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold dark:text-slate-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 dark:text-slate-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-slate-300 mb-4">{testimonial.text}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        <FaStar />
                      </span>
                    ))}
                  </div>
                  <span className="bg-[#FF708F] dark:bg-[#EFC481] text-white px-3 py-1 rounded-full text-xs">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute top-1/2 left-0 md:-left-8 p-2 bg-[#FF708F] dark:bg-[#EFC481] text-white rounded-full hover:bg-pink-600 transition"
          >
            <GrFormPrevious className="w-7 h-7" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute top-1/2 right-0 md:-right-8 p-2 bg-[#FF708F] dark:bg-[#EFC481] text-white rounded-full hover:bg-pink-600 transition"
          >
            <GrFormNext className="w-7 h-7" />
          </button>
        </div>
        <div className="bg-[#FF708F] dark:bg-[#DEB678] mt-5 rounded-xl flex items-center justify-between text-lg font-medium p-4 text-white">
          <p>Are you the next one!</p>
          <button className="px-4 py-2 bg-white text-[#FF708F] dark:text-[#EFC481] rounded-md">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
