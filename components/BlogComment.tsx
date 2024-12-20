import Image from "next/image";
import Link from "next/link";
import React from "react";
import authorImg from "@/public/assets/img/blog/comments/comment-1.jpg";
import authorImgTwo from "@/public/assets/img/blog/comments/comment-3.jpg";

const BlogComment = () => {
  return (
    <div className="latest-comments mb-24">
      <h3 className="text-2xl font-semibold mb-4">3 Comments</h3>
      <ul>
        <li className="mb-6">
          <div className="comments-box bg-gray-100 p-4 rounded-lg">
            <div className="comments-info flex items-center mb-4">
              <div className="comments-avatar mr-4">
                <Image
                  src={authorImg}
                  alt="Author Image"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="avatar-name">
                <h5 className="font-bold">Eleanor Fant</h5>
                <span className="text-sm text-gray-500">July 14, 2023</span>
              </div>
            </div>
            <div className="comments-text ml-16">
              <p className="text-gray-700">
                So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh
                David blatant have it, standard A bit of how's your father my
                lady absolutely.
              </p>
              <div className="comments-reply mt-2">
                <Link href="#" className="text-blue-500 hover:underline">
                  Reply
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li className="children mb-6">
          <div className="comments-box bg-gray-100 p-4 rounded-lg">
            <div className="comments-info flex items-center mb-4">
              <div className="comments-avatar mr-4">
                <Image
                  src={authorImg}
                  alt="Author Image"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="avatar-name">
                <h5 className="font-bold">Dominic</h5>
                <span className="text-sm text-gray-500">April 16, 2023</span>
              </div>
            </div>
            <div className="comments-text ml-16">
              <p className="text-gray-700">
                David blatant have it, standard A bit of how's your father my
                lady absolutely.
              </p>
              <div className="comments-reply mt-2">
                <Link href="#" className="text-blue-500 hover:underline">
                  Reply
                </Link>
              </div>
            </div>
          </div>
          <ul className="ml-8">
            <li className="children-2 mb-6">
              <div className="comments-box bg-gray-100 p-4 rounded-lg">
                <div className="comments-info flex items-center mb-4">
                  <div className="comments-avatar mr-4">
                    <Image
                      src={authorImgTwo}
                      alt="Author Image"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="avatar-name">
                    <h5 className="font-bold">Von Rails</h5>
                    <span className="text-sm text-gray-500">
                      April 18, 2023
                    </span>
                  </div>
                </div>
                <div className="comments-text ml-16">
                  <p className="text-gray-700">
                    He nicked it get stuffed mate spend a penny plastered.!
                  </p>
                  <div className="comments-reply mt-2">
                    <Link href="#" className="text-blue-500 hover:underline">
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BlogComment;
