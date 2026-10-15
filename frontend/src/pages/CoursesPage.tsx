import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Sparkles, ArrowRight, Video } from 'lucide-react';
import { Course } from '../types';
import { api } from '../services/api';

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
    <div className="min-h-screen bg-page text-ink-soft py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Archivo Formativo</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-2 mb-4">
            Cursos, Seminarios & Cátedras
          </h1>
          <p className="text-ink-soft font-light text-base leading-relaxed">
            Explora las clases abiertas y conferencias de investigación sobre crítica textual, exégesis histórica y manuscritos del Cercano Oriente.
          </p>

          {/* Buscador */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por título, temática o palabra clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface border border-line focus:border-gold focus:outline-none text-sm text-ink-soft placeholder-ink-muted shadow-inner"
            />
          </div>
        </div>

        {/* Listado de Cursos */}
        {loading ? (
          <div className="text-center py-20 text-ink-muted">
            Cargando programas académicos...
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20 text-ink-muted">
            No se encontraron seminarios que coincidan con la búsqueda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl overflow-hidden bg-surface border border-line hover:border-gold/60 transition-all duration-300 flex flex-col shadow-xl hover:-translate-y-1"
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden bg-sunken">
                  {course.imageUrl ? (
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink-muted">
                      <BookOpen className="w-12 h-12" />
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-surface/90 border border-gold/50 text-accent text-xs px-3 py-1 rounded-full font-semibold">
                    {course.category}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-gold mb-2 font-medium">
                      <Video className="w-3.5 h-3.5" />
                      <span>{course.lessons.length} {course.lessons.length === 1 ? 'lección en video' : 'lecciones en video'}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-ink mb-2 leading-snug">
                      {course.title}
                    </h2>
                    <p className="text-xs text-ink-soft line-clamp-3 leading-relaxed font-light">
                      {course.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <Link
                      to={`/cursos/${course.slug}`}
                      className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-soft to-soft hover:from-gold hover:to-gold-light hover:text-ink text-ink-soft text-xs font-bold transition-all shadow flex items-center justify-center space-x-1.5"
                    >
                      <span>Ver Clases y Material</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
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
