import AccordionIconOne from "@/svg/accordior-icon-one";
import AccordionIconTwo from "@/svg/accordion-icon-two";
import AccordionIconThree from "@/svg/accordion-icon-three";
import AccordionIconFour from "@/svg/accordion-icon-four";
import React from "react";

const CourseContent = () => {
  return (
    <div className="course__content bg-gray-50 py-8 px-6 rounded-md shadow-lg">
      <div className="accordion" id="course__accordion">
        {/* Module 1 */}
        <div className="accordion-item mb-6">
          <h2 className="accordion-header" id="module-01">
            <button
              className="accordion-button w-full text-left py-4 px-6 bg-blue-100 text-lg font-medium rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#module-01-content"
              aria-expanded="true"
              aria-controls="module-01-content"
            >
              Module 1: Introduction to Programming
            </button>
          </h2>
          <div
            id="module-01-content"
            className="accordion-collapse collapse show"
            aria-labelledby="module-01"
            data-bs-parent="#course__accordion"
          >
            <div className="accordion-body py-4">
              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center mb-4">
                <div className="course__content-info flex items-center">
                  <AccordionIconOne />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Reading:</span> Introduction
                    to programming concepts
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="time text-gray-600 text-sm flex items-center">
                    <i className="icon_clock_alt mr-2"></i> 20 minutes
                  </span>
                </div>
              </div>

              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center mb-4">
                <div className="course__content-info flex items-center">
                  <AccordionIconTwo />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Video:</span> Getting
                    started with coding
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="time text-gray-600 text-sm flex items-center">
                    <i className="icon_clock_alt mr-2"></i> 30 minutes
                  </span>
                </div>
              </div>

              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center mb-4">
                <div className="course__content-info flex items-center">
                  <AccordionIconThree />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Audio:</span> Understanding
                    programming logic
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="time text-gray-600 text-sm flex items-center">
                    <i className="icon_clock_alt mr-2"></i> 15 minutes
                  </span>
                </div>
              </div>

              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center">
                <div className="course__content-info flex items-center">
                  <AccordionIconFour />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Quiz:</span> Introduction to
                    programming concepts
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="question text-sm ml-4">5 questions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="accordion-item mb-6">
          <h2 className="accordion-header" id="module-02">
            <button
              className="accordion-button w-full text-left py-4 px-6 bg-blue-100 text-lg font-medium rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#module-02-content"
              aria-expanded="true"
              aria-controls="module-02-content"
            >
              Module 2: Data Structures
            </button>
          </h2>
          <div
            id="module-02-content"
            className="accordion-collapse collapse show"
            aria-labelledby="module-02"
            data-bs-parent="#course__accordion"
          >
            <div className="accordion-body py-4">
              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center mb-4">
                <div className="course__content-info flex items-center">
                  <AccordionIconOne />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Reading:</span> Introduction
                    to data structures
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="time text-gray-600 text-sm flex items-center">
                    <i className="icon_clock_alt mr-2"></i> 25 minutes
                  </span>
                </div>
              </div>

              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center mb-4">
                <div className="course__content-info flex items-center">
                  <AccordionIconTwo />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Video:</span> Data
                    structures in depth
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="time text-gray-600 text-sm flex items-center">
                    <i className="icon_clock_alt mr-2"></i> 45 minutes
                  </span>
                </div>
              </div>

              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center mb-4">
                <div className="course__content-info flex items-center">
                  <AccordionIconThree />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Audio:</span> Understanding
                    linked lists
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="time text-gray-600 text-sm flex items-center">
                    <i className="icon_clock_alt mr-2"></i> 20 minutes
                  </span>
                </div>
              </div>

              <div className="course__content-item flex sm:flex-row flex-col justify-between items-center">
                <div className="course__content-info flex items-center">
                  <AccordionIconFour />
                  <h3 className="ml-4 text-lg">
                    <span className="font-semibold">Quiz:</span> Data structures
                    concepts
                  </h3>
                </div>
                <div className="course__content-meta flex items-center">
                  <span className="question text-sm ml-4">7 questions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
