"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  title: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-48 px-8 flex flex-col items-center text-center md:text-left md:flex-row"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for Color Filter */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <motion.div
        className="z-10 md:w-1/2 p-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
