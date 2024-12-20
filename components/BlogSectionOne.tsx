import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import BlogQuoteImg from "@/public/assets/img/blog/quote-1.png";
import BlogText from "@/components/BlogText";
import BlogSocial from "@/components/BlogSocial";
import BlogAuthor from "@/components/BlogAuthor";
import BlogCommentForm from "@/components/BlogCommentForm";
import BlogSidebar from "@/components/BlogSidebar";
import BlogComment from "@/components/BlogComment";
import BlogRecent from "@/components/BlogRecent";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const BlogSectionOne: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Main Blog Content */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Blog Text Section */}
              <BlogText />

              {/* Quote Section */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8 relative">
                <Image
                  className="absolute top-[-10px] left-[-10px]"
                  src={BlogQuoteImg}
                  alt="Quote"
                  width={50}
                  height={50}
                />
                <blockquote className="text-lg italic text-gray-600">
                  <p>
                    "After I started learning design with Quillow, I realized
                    that I had improved to very advanced levels."
                  </p>
                  <h4 className="text-right text-gray-800 font-semibold mt-4">
                    - Chris Collins
                  </h4>
                </blockquote>
              </div>

              {/* Blog Paragraph */}
              <div className="mb-6 text-gray-700">
                <p>
                  Horse play {`it's`} all gone to pot codswallop easy peasy mush
                  knees up down the pub jolly good nice one tosser {`it's`} your
                  round lurgy, I vagabond barmy off his nut only a quid so I
                  said is gosh Charles blow off, pardon me chip shop Richard
                  spiffing skive off bleeding get stuffed mate porkies amongst
                  the full monty. Daft burke you.
                </p>
              </div>

              {/* External Link */}
              <div className="mb-6">
                <p className="text-blue-600 underline">
                  <Link href="https://educal.com/courses">
                    https://educal.com/courses
                  </Link>
                </p>
              </div>

              {/* Blog Image */}
              <div className="mb-8">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg"
                  width={800}
                  height={400}
                  layout="responsive"
                />
              </div>

              {/* Additional Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-700">{blog.description}</p>
              </div>

              {/* Divider */}
              <hr className="my-8" />

              {/* Social Sharing */}
              <BlogSocial />

              {/* Blog Author */}
              <BlogAuthor />

              {/* Recent Blogs */}
              <BlogRecent />

              {/* Latest Comments */}
              <BlogComment />

              {/* Comment Form */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Write a Review
                </h3>
                <BlogCommentForm />
              </div>
            </div>
          </div>

          {/* Blog Sidebar */}
          <div className="w-full lg:w-1/3 px-4 mt-10 lg:mt-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionOne;
