import HeroSection from "@/components/HeroSection";
import { blogGrid } from "@/data/aboutData";
import BlogCards from "@/components/BlogCards";

const BlogGrid = () => {
  return (
    <>
      <HeroSection image={blogGrid.image} title={blogGrid.title} />
      <BlogCards />
    </>
  );
};

export default BlogGrid;
