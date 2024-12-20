import React from "react";
import bgImg from "@/public/assets/img/page-title/page-title-3.jpg";
import Shape1 from "@/public/assets/img/page-title/page-title-shape-1.png";
import Shape2 from "@/public/assets/img/page-title/page-title-shape-2.png";
import Shape3 from "@/public/assets/img/page-title/page-title-shape-3.png";
import Shape4 from "@/public/assets/img/page-title/page-title-shape-4.png";
import Image, { StaticImageData } from "next/image";

interface Blog {
  id: number;
  authorImg: StaticImageData;
  title: string;
  blogTag: string;
  date: string;
  author: string;
}

const PageTitle: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <section
      className="relative flex items-center justify-center h-[400px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          className="absolute top-10 left-10"
          src={Shape1}
          alt="Shape 1"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          className="absolute top-20 right-10"
          src={Shape2}
          alt="Shape 2"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          className="absolute bottom-10 left-20"
          src={Shape3}
          alt="Shape 3"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          className="absolute bottom-5 right-20"
          src={Shape4}
          alt="Shape 4"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="text-lg font-medium uppercase tracking-wide text-yellow-400">
            {blog?.blogTag}
          </span>
          <h3 className="text-4xl font-bold mt-4">{blog?.title}</h3>
          <div className="flex items-center justify-center mt-6 space-x-10">
            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blog?.authorImg}
                  alt="Author image"
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-lg">{blog?.author}</h5>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <i className="fal fa-clock"></i>
              <span>{blog?.date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
