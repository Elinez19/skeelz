"use client";

import React from "react";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-emerald-100">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src="/service8.jpeg"
          alt="Achieve your Goals"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          Achieve your Goals with Educal
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
          className="inline-block w-36 bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:bg-emerald-700 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
