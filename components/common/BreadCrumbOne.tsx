import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadCrumbItem {
  label: string;
  href: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-medium">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Link
            href={item.href}
            className="text-white text-2xl hover:text-indigo-600"
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 text-white" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadCrumb;
