export interface Lesson {
  id: string;
  title: string;
  order: number;
  videoUrl?: string | null;
  content: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  summary: string;
  imageUrl?: string | null;
  category: string;
  lessons: Lesson[];
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string[];
}
