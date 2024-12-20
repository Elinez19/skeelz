"use client";

import Image from "next/image";
import category_data from "@/data/category-data";
import { Button } from "@/components/ui/button";

export default function CategorySection() {
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#404145] font-bold">
        Explore Categories
      </h2>
      <div className="flex flex-wrap gap-8">
        {category_data.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className="flex flex-col items-center p-4 w-52 h-72 rounded-lg shadow-md hover:bg-emerald-50"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-sm text-gray-500 text-center">{category.desc}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}
