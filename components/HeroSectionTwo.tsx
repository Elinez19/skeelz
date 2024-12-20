// components/HeroSectionTwo.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import HeroImage1 from "../public/assets/img/hero/hero-1.webp";
import HeroImage2 from "../public/assets/img/hero/hero-2.webp";
import HeroImage3 from "../public/assets/img/hero/hero-3.webp";

const sliderData = [
  {
    image: HeroImage1.src,
    title: "Innovative Solutions",
    text: "Empowering your business with cutting-edge technology and creative solutions.",
    buttonText: "Discover More",
  },
  {
    image: HeroImage2.src,
    title: "Seamless Integration",
    text: "Transforming the way you work with integrated tools and resources.",
    buttonText: "Learn More",
  },
  {
    image: HeroImage3.src,
    title: "Scalable Growth",
    text: "Empowering growth with flexible solutions tailored to your needs.",
    buttonText: "Get Started",
  },
];

const HeroSectionTwo = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text & CTA with margin to move down */}
            <div className="relative z-10 text-center text-white px-6 md:px-12 lg:px-24 mt-20 lg:mt-32">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {slide.title}
              </motion.h2>
              <motion.p
                className="text-lg lg:text-xl mb-6 max-w-xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                {slide.text}
              </motion.p>
              <motion.button
                className="bg-white text-indigo-600 hover:bg-indigo-100 font-medium py-2 px-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                {slide.buttonText}
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 42px;
          height: 6px;
          border-radius: 2px;
          background-color: orangered;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background-color: white; /* Darker gray for the active dot */
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default HeroSectionTwo;
