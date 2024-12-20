"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentPosts = [
    {
      id: 1,
      title: "Understanding React Lifecycle Methods",
      date: "August 15, 2024",
      image: "/recent-1.jpg",
    },
    {
      id: 2,
      title: "10 Tips for Writing Clean Code",
      date: "July 25, 2024",
      image: "/recent-2.jpg",
    },
    {
      id: 3,
      title: "Introduction to Tailwind CSS",
      date: "June 10, 2024",
      image: "/recent-3.jpg",
    },
  ];

  const categories = [
    { name: "Web Development", count: 20 },
    { name: "UI/UX Design", count: 15 },
    { name: "JavaScript", count: 10 },
    { name: "Next.js", count: 8 },
  ];

  const tags = ["React", "CSS", "JavaScript", "Next.js", "Frontend", "WebDev"];

  return (
    <div className="w-full max-w-[380px] mx-auto space-y-6">
      {/* Search */}
      <div className="p-6">
        <Card className="p-6 shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Search</h4>
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Card>
      </div>

      {/* Recent Posts */}
      <div className="p-6">
        <Card className="p-6 shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h5 className="font-semibold">{post.title}</h5>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Categories */}
      <div className="p-6">
        <Card className="p-6 shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-3 text-sm">
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex justify-between items-center"
              >
                <Button
                  variant="link"
                  className="text-muted-foreground hover:text-primary"
                >
                  {category.name}
                </Button>
                <span>{category.count}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Tags */}
      <div className="p-6">
        <Card className="p-6 shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                className="text-sm rounded-md px-4 py-2"
              >
                {tag}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
