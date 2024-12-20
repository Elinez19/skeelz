import { motion } from "framer-motion";
import Image from "next/image";
import courseImage from "../public/assets/img/course-info.jpg";

const CourseInfo = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-80 lg:px-24 py-12  text-black bg-emerald-500">
      
      {/* Left Section: Texts and CTAs */}
      <div className="md:w-1/2 lg:w-2/5">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Learn with Us!
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Unlock new skills with our comprehensive courses designed to bring out the best in you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.button
            className="bg-white text-emerald-600 hover:bg-emerald-200 font-medium py-2 px-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white hover:bg-emerald-500 font-medium py-2 px-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Right Section: Image with U-Shaped Border */}
      <div className="md:w-1/2 lg:w-2/5 mt-8 md:mt-0 relative">
        <motion.div
          className="relative rounded-b-full border-2 border-emerald-100 -m-8 shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={courseImage}
            alt="Course Image"
            width={800} 
            height={800} 
            className="rounded-b-full w-full"
          />
        </motion.div>
      </div>
      
    </section>
  );
};

export default CourseInfo;
