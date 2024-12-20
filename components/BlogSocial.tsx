import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const BlogSocial: React.FC = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
    },
    { id: 2, name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
    },
  ];

  return (
    <div className="flex items-center space-x-4 mt-8">
      <span className="text-gray-700 font-medium">Share:</span>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-700 rounded-full transition-all"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default BlogSocial;
