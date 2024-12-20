// CourseCard.tsx
import React, { FC } from "react";
import Image from "next/image";
import { Course } from "@/data/courses-data";

interface CourseCardProps {
  course: Course;
}

const RelatedCourse: FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card border rounded-lg shadow-md p-4">
      <div className="image-wrapper">
        <Image
          src={course.image}
          alt={course.title}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full"
        />
      </div>
      <div className="content mt-4">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600">By {course.instructor}</p>
        <p className="text-sm text-gray-600 mt-1">
          Category: {course.category}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-700">
            {course.lessons} Lessons
          </p>
          <p className="text-sm font-medium text-yellow-500">
            Rating: {course.rating} ⭐
          </p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Students: {course.students.toLocaleString()}
          </p>
          <p className="text-lg font-bold text-purple-600">${course.price}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedCourse;
