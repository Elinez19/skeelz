// components/CourseCard.tsx
import { FC } from "react";
import Image from "next/image";
import { coursesType } from "@/types/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import RelatedCourse from "@/components/RelatedCourse-1";
import CourseAccordion from "@/components/CourseAccordion";

interface CourseCardProps {
  course: coursesType;
}

const CourseSectionOne: FC<CourseCardProps> = ({ course }) => {
  return (
    <div>
      <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500">{course.category}</div>
          <h3 className="text-lg font-semibold text-gray-800">
            {course.title}
          </h3>
          <div className="mt-2 flex items-center">
            <Image
              src={course.tutorImg}
              alt={course.author}
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="ml-2 text-gray-600">{course.author}</span>
          </div>
          <div className="mt-3 text-gray-500 text-sm">
            {course.desc ||
              "Enhance your knowledge with this comprehensive course."}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center px-4 py-2">
          <div>
            {course.price > 0 ? (
              <span className="text-xl font-semibold text-indigo-600">
                ${course.price}
              </span>
            ) : (
              <span className="text-xl font-semibold text-green-500">Free</span>
            )}
            {course.oldPrice > 0 && (
              <span className="ml-2 text-sm line-through text-gray-400">
                ${course.oldPrice}
              </span>
            )}
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500 transition-colors">
            Enroll Now
          </button>
        </CardFooter>
      </Card>
      <div className="mt-6">
        <RelatedCourse course={course} />
      </div>
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Course Modules
        </h1>
        <CourseAccordion />
      </div>
    </div>
  );
};

export default CourseSectionOne;
