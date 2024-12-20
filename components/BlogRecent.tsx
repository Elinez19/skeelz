import blog_data from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import YellowBg from "@/public/assets/img/shape/yellow-bg-4.png";

const RecentPosts = () => {
  return (
    <div className="blog__recent mb-16">
      <div className="section__title-wrapper mb-10">
        <h2 className="section__title text-3xl font-semibold text-gray-900">
          Related{" "}
          <span className="relative inline-block">
            <Image
              src={YellowBg}
              alt="img not found"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <span className="relative z-10">Posts</span>
          </span>
        </h2>
        <p className="text-gray-700">
          You don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blog_data.slice(12, 14).map((item) => (
          <div
            key={item.id}
            className="bg-white mb-6 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="w-full h-64 relative">
              <Link href={`/blog-details/${item.id}`}>
                <Image
                  src={item.image}
                  alt="image not found"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <Link
                  href={`/blog-details/${item.id}`}
                  className="text-sm font-semibold text-yellow-500"
                >
                  {item.blogTag}
                </Link>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={item.authorImg}
                      alt="Author image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm text-gray-600">{item.author}</h5>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fal fa-clock mr-2"></i>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
