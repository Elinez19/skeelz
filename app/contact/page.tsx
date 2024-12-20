import BreadCrumb from "@/components/common/BreadCrumbOne";
import Contact from "@/components/contact";

const ContactPage = () => {
  const breadCrumbData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-20 p-28">
        <BreadCrumb items={breadCrumbData} />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
