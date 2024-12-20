"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReactPlayer from "react-player";

export default function CourseSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const course = {
    price: 99,
    duration: "10 hours",
    lectures: 25,
    level: "Beginner",
    includesCertificate: true,
    downloadableResources: 5,
    communityAccess: true,
  };

  const categories = [
    { name: "Art & Design", count: 54 },
    { name: "Development", count: 38 },
    { name: "Business", count: 28 },
    { name: "Marketing", count: 18 },
    { name: "Health & Fitness", count: 89 },
  ];

  const relatedCourses = [
    {
      id: 1,
      image: "/course-1.webp",
      title: "Introduction to Design",
      description:
        "Learn the fundamentals of design and unleash your creativity.",
    },
    {
      id: 2,
      image: "/course-2.webp",
      title: "Web Development Essentials",
      description: "Master the basics of building dynamic websites.",
    },
    {
      id: 3,
      image: "/course-4.webp",
      title: "Digital Marketing Strategies",
      description: "Enhance your skills to reach the right audience.",
    },
  ];

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-[380px] mx-auto space-y-6">
      {/* Course Details Card */}
      <div className="p-6">
        <Card className="p-6 shadow-lg sticky top-6">
          <div className="space-y-6">
            <div className="relative w-72 h-64 md:h-40 overflow-hidden rounded-md">
              <ReactPlayer
                url="https://youtu.be/zJSY8tbf_ys?si=g6ASHfTDBLOj6jKq"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                light={true}
                playing={false}
              />
              <button
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl rounded-md"
                onClick={() => setIsModalOpen(true)}
              >
                Play
              </button>
            </div>

            <div>
              <span className="text-3xl font-bold">Price: ${course.price}</span>
            </div>

            <div className="space-y-2">
              <Button className="w-full text-lg">Buy now</Button>
              <Button variant="outline" className="w-full text-lg">
                Add to cart
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <h4 className="font-semibold">This course includes:</h4>
              <ul className="space-y-3">
                <li>{course.duration} of on-demand video</li>
                <li>{course.lectures} lectures</li>
                <li>Full lifetime access</li>
                <li>Learn at your own pace</li>
                {course.includesCertificate && (
                  <li>Certificate of completion</li>
                )}
                <li>{course.downloadableResources} downloadable resources</li>
                {course.communityAccess && <li>Access to community forums</li>}
                <li>Access on mobile, tablet, and desktop</li>
                <li>30-day money-back guarantee</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClose} // Close modal on clicking the overlay
        >
          <div
            className="bg-white p-6 rounded-md shadow-lg w-[90%] md:w-[600px] h-[90%] relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-4 right-4 text-lg font-bold"
              onClick={handleModalClose}
            >
              ❌
            </button>
            <ReactPlayer
              url="https://youtu.be/zJSY8tbf_ys?si=g6ASHfTDBLOj6jKq"
              playing
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}

      {/* Categories Card */}
      <div className="p-6">
        <Card className="p-6 shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Course Categories</h4>
          <ul className="space-y-3 text-sm">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category.name}
                  className="flex justify-between items-center"
                >
                  <Button
                    variant="link"
                    className="text-muted-foreground hover:text-primary"
                  >
                    {category.name}
                  </Button>
                  <span>{category.count}</span>
                </li>
              ))
            ) : (
              <li>No categories available</li>
            )}
          </ul>
        </Card>
      </div>

      {/* Related Courses Card */}
      <div className="p-6">
        <Card className="p-6 shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Related Courses</h4>
          <ul className="space-y-6">
            {relatedCourses.map((course) => (
              <li key={course.id} className="flex gap-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h5 className="font-semibold">{course.title}</h5>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
