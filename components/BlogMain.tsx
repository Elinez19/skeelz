import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog_data from "@/data/blog-data";
import BlogSidebar from "./BlogSidebar";
import BreadcrumbTwo from "./common/BreadCrumbTwo";

const BlogMain = () => {
  const breadcrumbItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog Grid",
      href: "/blog",
    },
  ];

  return (
    <>
      <BreadcrumbTwo items={breadcrumbItem} />
      <section className="pt-16 pb-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Blog Content Area */}
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {blog_data.slice(3, 9).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <div className="relative">
                      <Link href={`/blog-details/${item.id}`}>
                        <Image
                          src={item.image}
                          width={500}
                          height={300}
                          className="w-full h-auto"
                          alt="Blog Thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <Link
                          href={`/blog-details/${item.id}`}
                          className={`text-sm font-medium text-purple-600 ${
                            item.blogWrapperClass || ""
                          }`}
                        >
                          {item.blogTag}
                        </Link>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        <Link href={`/blog-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={item.authorImg}
                            width={30}
                            height={30}
                            className="w-8 h-8 rounded-full"
                            alt="Author Thumbnail"
                          />
                          <span>{item.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <i className="fas fa-clock"></i>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 text-center">
                <ul className="inline-flex items-center space-x-4">
                  <li>
                    <Link
                      href="/blog"
                      className="px-4 py-2 text-sm text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Prev
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="px-4 py-2 text-sm text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="px-4 py-2 text-sm text-white bg-purple-600 rounded-lg"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="px-4 py-2 text-sm text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="px-4 py-2 text-sm text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 px-4 mt-10 lg:mt-0">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMain;
