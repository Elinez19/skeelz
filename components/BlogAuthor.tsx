import React from "react";
import Image from "next/image";
import AuthorImg from "@/public/assets/img/blog/author/author-1.jpg";

const BlogAuthor: React.FC = () => {
  return (
    <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center space-x-6">
        <Image
          src={AuthorImg}
          alt="Author"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
          <p className="text-sm text-gray-600">Professional Writer</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 text-sm">
        Hi, I’m John Doe, a passionate writer and storyteller with over 10 years
        of experience. I love sharing knowledge and creating impactful
        narratives that resonate with readers worldwide.
      </p>
      <div className="mt-4 flex items-center space-x-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default BlogAuthor;
