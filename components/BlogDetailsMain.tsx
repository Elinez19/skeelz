import React from "react";

import blog_data from "@/data/blog-data";
import BlogSectionOne from "./BlogSectionOne";
import { idType } from "@/types/types";
import PageTitle from "./PageTitle";

const BlogDetailsMain = ({ id }: idType) => {
  const blog: any = blog_data.find((item) => item.id == id);
  return (
    <>
      <PageTitle blog={blog} />
      <BlogSectionOne blog={blog} />
    </>
  );
};

export default BlogDetailsMain;
