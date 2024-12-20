"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  heroSection,
  ourStory,
  visionMission,
  teamMembers,
  achievements,
  ctaSection,
} from "../data/aboutData";
import HeroSection from "@/components/HeroSection";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <HeroSection
        image={heroSection.image}
        title={heroSection.title}
        description={heroSection.description}
      />

      {/* Our Story */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {ourStory.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
          {ourStory.description}
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-8 flex flex-col md:flex-row bg-gray-100 items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={visionMission.image}
            alt="Vision and Mission"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {visionMission.vision.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {visionMission.vision.description}
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {visionMission.mission.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {visionMission.mission.description}
          </p>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {achievement.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-8 bg-emerald-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{ctaSection.title}</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          {ctaSection.description}
        </p>
        <button className="bg-white text-emerald-500 font-medium py-3 px-8 rounded-lg hover:bg-gray-200 transition">
          {ctaSection.buttonText}
        </button>
      </section>
    </div>
  );
};

export default About;
