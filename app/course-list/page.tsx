"use client";

import React from "react";
import CourseGrid from "@/components/CourseGrid";
import HeroSection from "@/components/HeroSection";
import { courseGridHero } from "@/data/aboutData";
import { courses } from "@/data/courses-data";
import BreadCrumb from "@/components/common/BreadCrumbOne";

const CourseGridPage = () => {
  const breadCrumbData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-20 p-28">
        <BreadCrumb items={breadCrumbData} />
      </div>

      <HeroSection
        image={courseGridHero.image}
        title={courseGridHero.title}
        description={courseGridHero.description}
      />
      <div id="courses" className="container mx-auto py-12">
        <CourseGrid courses={courses} />
      </div>
    </div>
  );
};

export default CourseGridPage;
