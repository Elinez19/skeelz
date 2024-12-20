"use client";
import About from "@/components/About";
import AboutContent from "@/components/AboutContent";
import AboutInfo from "@/components/AboutInfo";
import BreadCrumb from "@/components/common/BreadCrumbOne";

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];
  return (
    <div className="relative">
      {/* Position BreadCrumb */}
      <div className="absolute top-0 left-0 w-full z-20 p-28">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <About />
      <AboutInfo />
      <AboutContent />
    </div>
  );
}
