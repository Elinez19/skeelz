import Link from "next/link";
import React from "react";

const BlogCategory = () => {
  return (
    <div className="mb-14">
      {/* Widget Header */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800">Category</h3>
      </div>

      {/* Widget Content */}
      <div className="text-gray-600">
        <ul className="space-y-4">
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Video & Tips (4)
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Education (8)
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Business (5)
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              UX Design (3)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCategory;
