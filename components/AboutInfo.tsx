"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function AboutInfo() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-14 bg-emerald-100">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          Achieve your Goals with Skeelz
        </h2>

        {/* Description */}
        <p className="text-gray-700">
          Lost the plot bobby such a fibber bleeding bits and bobs don't get
          shirty with me bugger all mate chinwag super pukka william barney,
          horse play buggered.
        </p>

        {/* List Items */}
        <ul className="list-none space-y-2">
          <li className="flex items-center text-gray-800">
            <span className="text-emerald-600 mr-2">✔</span>
            Upskill your organization.
          </li>
          <li className="flex items-center text-gray-800">
            <span className="text-emerald-600 mr-2">✔</span>
            Access more than 100K online courses.
          </li>
          <li className="flex items-center text-gray-800">
            <span className="text-emerald-600 mr-2">✔</span>
            Learn the latest skills.
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="/apply-now"
          className="inline-block w-32 bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:bg-emerald-700 transition"
        >
          Apply Now
        </a>
      </div>

      {/* Right Info Card */}
      <div className="w-full md:w-1/2 flex flex-col border rounded-md shadow-lg bg-white">
        {/* Embedded Video - Full Top */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-md">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            controls={true}
          />
        </div>

        {/* Content Below Video */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Explore the Future of Technology
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            Dive deep into cutting-edge innovations that are shaping our world.
            Join us on a journey of discovery and inspiration with our curated
            content and engaging experiences.
          </p>

          {/* CTA Button */}
          <a
            href="/get-started"
            className="inline-block w-32 bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:bg-emerald-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
