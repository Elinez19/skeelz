"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, TrendingUp } from "lucide-react";
import CourseCard from "@/components/CourseCards";
import CourseInfo from "./CourseInfo";
import HeroSectionTwo from "./HeroSectionTwo";
import featuredCourses from "@/data/courses-data";
import PopularServices from "@/components/Featured";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSectionTwo />
      <PopularServices />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-5xl font-bold">Explore our Courses</h2>
            <Button className="bg-emerald-400 text-white hover:bg-emerald-800">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6">
            <BookOpen className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">213,000+ Courses</h3>
            <p className="text-muted-foreground">
              Explore a wide range of courses
            </p>
          </Card>
          <Card className="p-6">
            <Users className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">5M+ Students</h3>
            <p className="text-muted-foreground">Join our growing community</p>
          </Card>
          <Card className="p-6">
            <Trophy className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-muted-foreground">Learn from industry experts</p>
          </Card>
          <Card className="p-6">
            <TrendingUp className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Lifetime Access</h3>
            <p className="text-muted-foreground">Learn at your own pace</p>
          </Card>
        </section>

        <section className="m-18">
          <CourseInfo />
        </section>
      </div>
    </main>
  );
};

export default Home;
