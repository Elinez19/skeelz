"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  instructor: string;
  lessons: number;
  rating: number;
  students: number;
  price: number;
  image: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer group">
      <Link href={`/courses/${course.id}`} className="block">
        <div className="relative h-48">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 bg-emerald-600 text-white px-2 py-1 text-xs rounded-sm"
          >
            {course.category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-1 line-clamp-2 transition-colors group-hover:text-emerald-600">
            {course.title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <FaChalkboardTeacher className="text-gray-500 w-5 h-5" />
            <p className="text-sm text-gray-500">{course.instructor}</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <FaBookOpen className="w-4 h-4" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <AiOutlineUser className="w-4 h-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 font-bold">{course.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <AiFillStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 border-t border-gray-200 flex justify-between items-center">
        <span className="text-xl font-bold text-gray-800">${course.price}</span>
        <Link href={`/courses/${course.id}`}>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-emerald-700">
            View Course
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}
