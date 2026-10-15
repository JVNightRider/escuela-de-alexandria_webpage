import { Course, Lesson } from '../types';
import { coursesData, getCourseBySlug, getCourses } from '../data/coursesData';

class CoursesService {
  public async getCatalog(): Promise<Course[]> {
    return getCourses();
  }

  public async getCourseBySlug(slug: string): Promise<Course | null> {
    return getCourseBySlug(slug);
  }

  public async getLessonContent(slug: string, lessonId: string): Promise<Lesson | null> {
    const course = await getCourseBySlug(slug);
    if (!course) return null;
    return course.lessons.find((l) => l.id === lessonId) || null;
  }
}

export const api = new CoursesService();
