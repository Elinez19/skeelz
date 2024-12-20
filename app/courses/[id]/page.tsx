import { Metadata } from "next";
import { courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";
import CourseSidebar from "@/components/CourseSidebar";
import CourseAccordion from "@/components/CourseAccordion";
import HeroSection from "@/components/HeroSection";
import RelatedCourses from "@/components/RelatedCourse";
import featuredCourses from "@/data/courses-data";
import BreadCrumb from "@/components/common/BreadCrumbOne";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | MySkillsRoot`,
    description: course.description,
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <BreadCrumb items={[]} />
      <HeroSection
        image={course.image}
        title={course.title}
        description={course.description}
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{course.category}</Badge>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-muted-foreground">
                      ({course.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
              </div>

              {/* About the Course Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About the Course</h2>
                <p className="text-lg text-muted-foreground">
                  {course.about ||
                    "This course provides an in-depth understanding of the subject matter, focusing on real-world applications and hands-on practice."}
                </p>
              </div>

              {/* What You'll Learn Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What you'll learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Content Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Course content</h2>
                <CourseAccordion />
              </div>
              <div className="container mx-auto p-6">
                {/* Other course page content */}
                <RelatedCourses courses={featuredCourses} />
              </div>
            </div>
          </div>
        </main>
        <CourseSidebar />
      </div>
    </div>
  );
}
