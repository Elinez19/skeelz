import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionOneProps {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  primaryBtnLink?: string;
  secondaryBtnLink?: string;
  heroImageOne: string;
  heroImageTwo: string;
  bgColor?: string; // Optional for background color
}

const HeroSectionOne: React.FC<HeroSectionOneProps> = ({
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnLink = "#",
  secondaryBtnLink = "#",
  heroImageOne,
  heroImageTwo,
  bgColor = "bg-emerald-100",
}) => {
  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 ${bgColor} overflow-hidden`}
    >
      {/* Left Section: Header and Paragraph */}
      <div className="md:w-1/2 lg:w-2/5 relative z-20">
        <motion.h1
          className="text-black text-4xl lg:text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-gray-800 text-lg lg:text-xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <a href={primaryBtnLink}>
            <motion.button
              className="bg-emerald-500 text-white hover:bg-emerald-600 font-medium py-2 px-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {primaryBtnText}
            </motion.button>
          </a>
          <a href={secondaryBtnLink}>
            <motion.button
              className="text-gray-600 border-2 border-emerald-500 hover:border-emerald-600 font-medium py-2 px-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {secondaryBtnText}
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Right Section: Hero Images */}
      <div className="md:w-1/2 lg:w-2/5 mt-8 md:mt-0 relative z-20">
        {/* Background HeroTwo Image */}
        <motion.div
          className="absolute -top-6 -left-6 w-[400px] h-[400px] opacity-60 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={heroImageTwo}
            alt="Background Hero Image"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Foreground HeroOne Image */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={heroImageOne}
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
