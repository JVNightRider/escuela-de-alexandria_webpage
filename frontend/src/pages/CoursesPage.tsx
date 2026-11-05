import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, Video } from 'lucide-react';
import { Course } from '../types';
import { api } from '../services/api';
import { PageMeta } from '../components/PageMeta';

export const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCatalog()
      .then((data) => setCourses(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page page--pad">
      <PageMeta
        title="Cursos, Seminarios & Cátedras"
        description="Catálogo de clases abiertas y conferencias de investigación sobre crítica textual, exégesis histórica y manuscritos del Cercano Oriente."
        path="/cursos"
      />

      <div className="container">
        {/* Cabecera */}
        <div className="catalog__head">
          <span className="kicker">Archivo Formativo</span>
          <h1 className="catalog__title">Cursos, Seminarios &amp; Cátedras</h1>
          <p className="catalog__text">
            Explora las clases abiertas y conferencias de investigación sobre crítica textual, exégesis histórica y manuscritos del Cercano Oriente.
          </p>

          {/* Buscador */}
          <div className="catalog__search">
            <div className="search search--lg">
              <Search className="search__icon" />
              <input
                type="text"
                placeholder="Buscar por título, temática o palabra clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search__input"
              />
            </div>
          </div>
        </div>

        {/* Listado de cursos */}
        {loading ? (
          <div className="catalog__state">Cargando programas académicos...</div>
        ) : filteredCourses.length === 0 ? (
          <div className="catalog__state">No se encontraron seminarios que coincidan con la búsqueda.</div>
        ) : (
          <div className="catalog__grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-card__media">
                  {course.imageUrl ? (
                    <img src={course.imageUrl} alt={course.title} className="course-card__image" />
                  ) : (
                    <div className="course-card__placeholder">
                      <BookOpen className="icon icon--2xl" />
                    </div>
                  )}

                  <div className="course-card__category">{course.category}</div>
                </div>

                <div className="course-card__body">
                  <div>
                    <div className="course-card__meta">
                      <Video className="icon icon--tiny" />
                      <span>
                        {course.lessons.length}{' '}
                        {course.lessons.length === 1 ? 'lección en video' : 'lecciones en video'}
                      </span>
                    </div>
                    <h2 className="course-card__title">{course.title}</h2>
                    <p className="course-card__summary">{course.summary}</p>
                  </div>

                  <div className="course-card__footer">
                    <Link to={`/cursos/${course.slug}`} className="course-card__cta">
                      <span>Ver Clases y Material</span>
                      <ArrowRight className="icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
