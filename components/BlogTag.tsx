import Link from "next/link";
import React from "react";

const BlogTag = () => {
  return (
    <div className="mb-14">
      {/* Widget Header */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800">Tags</h3>
      </div>

      {/* Widget Content */}
      <div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Art & Design
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Course
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Videos
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            App
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Education
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Data Science
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Machine Learning
          </Link>
          <Link
            href="#"
            className="px-3 py-1 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogTag;
