import BlogDetailsMain from "@/components/BlogDetailsMain";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <BlogDetailsMain id={id} />
    </>
  );
};

export default page;
