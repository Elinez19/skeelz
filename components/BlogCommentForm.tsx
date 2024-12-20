"use client";

import React, { useState } from "react";

const BlogCommentForm = () => {
  // Add state to handle checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="blog__comment-input">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <div className="blog__comment-input">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="blog__comment-input">
          <input
            type="text"
            name="website"
            placeholder="Website"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <div className="blog__comment-input">
          <textarea
            name="comment"
            placeholder="Enter your comment ..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <input
            className="e-check-input w-4 h-4"
            type="checkbox"
            id="e-agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="text-sm text-gray-700" htmlFor="e-agree">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div>
        <div className="blog__comment-btn">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogCommentForm;
