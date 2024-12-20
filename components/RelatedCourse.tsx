import React from "react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  lessons?: number;
  rating: number;
  students: number;
  price: number;
  image: string;
  category: string;
}

interface RelatedCoursesProps {
  courses: Course[];
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ courses }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow relative"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {course.category}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{course.instructor}</p>
              <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                <span>{course.rating} ★</span>
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <p className="text-lg font-bold mb-4">
                ${course.price.toFixed(2)}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedCourses;
