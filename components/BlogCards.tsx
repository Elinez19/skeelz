"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import blog_data from "@/data/blog-data";

const BlogCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blog_data.map((blog) => (
        <Card
          key={blog.id}
          className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
        >
          <Link href={`/blogs/${blog.id}`} className="block">
            <div className="relative h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <Badge
                variant="secondary"
                className="absolute top-2 left-2 bg-emerald-600 text-white px-2 py-1 text-xs rounded-sm"
              >
                {blog.blogTag}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-1 line-clamp-2 transition-colors group-hover:text-emerald-600">
                {blog.title}
              </h3>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src={blog.authorImg}
                  alt={blog.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    {blog.author}
                  </p>
                  <p className="text-xs text-gray-500">{blog.date}</p>
                </div>
              </div>
            </CardContent>
          </Link>
          <CardFooter className="p-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs text-gray-500">Read more...</span>
            <Link href={`/blogs/${blog.id}`}>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-emerald-700">
                View Blog
              </button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogCards;
