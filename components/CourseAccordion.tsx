import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { modules } from "@/lib/courses";
import { FiLock, FiVideo, FiChevronDown, FiEye } from "react-icons/fi"; // Added Eye icon for preview

type Lesson = {
  id: number;
  title: string;
  duration: string;
  isLocked: boolean;
  hasPreview: boolean; // Added hasPreview property
};

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};

const CourseAccordion: FC = () => {
  return (
    <Accordion type="single" collapsible>
      {modules.map((module) => (
        <AccordionItem
          key={module.id}
          value={`module-${module.id}`}
          className="mb-4"
        >
          <AccordionTrigger>
            <div className="flex justify-between items-center w-full p-5 rounded-lg bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-semibold">{module.title}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm">{module.lessons.length} Lessons</span>
                <FiChevronDown className="text-lg transition-transform duration-300 transform rotate-0 group-open:rotate-180" />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple">
              {module.lessons.map((lesson) => (
                <AccordionItem key={lesson.id} value={`lesson-${lesson.id}`}>
                  <AccordionTrigger>
                    <div className="flex justify-between items-center w-full p-5 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        {lesson.isLocked ? (
                          <FiLock className="text-red-500 text-lg" />
                        ) : (
                          <FiVideo className="text-green-500 text-lg" />
                        )}
                        <span className="text-md text-gray-800">
                          {lesson.title}
                        </span>
                        {lesson.hasPreview && (
                          <FiEye className="text-blue-500 text-lg" />
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        {lesson.duration}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Add content or details for each lesson */}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseAccordion;
