export interface Course {
  id: number;
  title: string;
  instructor: string;
  lessons?: number;
  rating: number;
  students: number;
  price: number;
  image: string;
  category: string;
}

const featuredCourses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    students: 245000,
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    category: "Development",
    lessons: 15,
  },
  {
    id: 2,
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    rating: 4.7,
    students: 185000,
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
    category: "Data Science",
    lessons: 10,
  },
  {
    id: 3,
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    rating: 4.6,
    students: 165000,
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    category: "Marketing",
    lessons: 15,
  },
];
export const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    students: 245000,
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    category: "Development",
    lessons: 15,
  },
  {
    id: 2,
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    rating: 4.7,
    students: 185000,
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
    category: "Data Science",
    lessons: 10,
  },
  {
    id: 3,
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    rating: 4.6,
    students: 165000,
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    category: "Marketing",
    lessons: 15,
  },
];

export default featuredCourses;
