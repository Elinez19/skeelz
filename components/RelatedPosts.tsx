import React from "react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
}

interface RelatedBlogPostsProps {
  posts: BlogPost[];
}

const RelatedBlogPosts: React.FC<RelatedBlogPostsProps> = ({ posts }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Related Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow relative"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {post.category}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                By {post.author} | {post.date}
              </p>
              <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
