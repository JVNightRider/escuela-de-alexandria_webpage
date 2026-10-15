import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen,
  PlayCircle,
  ArrowLeft,
  Video,
} from 'lucide-react';
import { Course, Lesson } from '../types';
import { api } from '../services/api';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [course, setCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    api.getCourseBySlug(slug)
      .then((data) => {
        setCourse(data);
        if (data && data.lessons.length > 0) {
          setSelectedLesson(data.lessons[0]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-page text-ink-soft flex items-center justify-center">
        <p className="text-ink-muted">Cargando programa del seminario...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-page text-ink-soft flex flex-col items-center justify-center p-6">
        <h2 className="font-serif text-2xl font-bold mb-4">Seminario no encontrado</h2>
        <Link to="/cursos" className="text-accent hover:underline flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page text-ink-soft py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Botón Volver */}
        <Link
          to="/cursos"
          className="inline-flex items-center space-x-2 text-xs text-ink-muted hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo de cursos</span>
        </Link>

        {/* Cabecera del Curso */}
        <div className="p-8 rounded-2xl bg-surface border border-line shadow-xl mb-10 space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 border border-gold/40 text-accent">
            {course.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
            {course.title}
          </h1>
          <p className="text-ink-soft text-sm leading-relaxed font-light max-w-3xl">
            {course.summary}
          </p>
        </div>

        {/* Visor de Contenido y Lista de Lecciones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Reproductor y Material de la Lección (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {selectedLesson ? (
              <div className="rounded-2xl overflow-hidden bg-surface border border-line shadow-xl">
                
                {/* Cabecera de la Lección */}
                <div className="p-6 border-b border-line flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Lección {selectedLesson.order}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-ink mt-1">
                      {selectedLesson.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Video Embebido */}
                  {selectedLesson.videoUrl && (
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-line shadow-inner">
                      <iframe
                        src={selectedLesson.videoUrl}
                        title={selectedLesson.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Texto y Exégesis de la Lección */}
                  <div className="prose prose-invert max-w-none">
                    <h3 className="font-serif text-lg font-bold text-accent mb-2">
                      Notas Académicas y Exégesis
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed whitespace-pre-line bg-surface p-5 rounded-xl border border-line">
                      {selectedLesson.content}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-ink-muted rounded-2xl bg-surface border border-line">
                Selecciona una lección para comenzar.
              </div>
            )}
          </div>

          {/* Columna Derecha: Temario de Lecciones (1/3) */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-surface border border-line shadow-xl">
              <h3 className="font-serif text-xl font-bold text-ink mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-gold" />
                <span>Temario del Seminario</span>
              </h3>

              <div className="space-y-2.5">
                {course.lessons.map((lesson) => {
                  const isSelected = selectedLesson?.id === lesson.id;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 ${
                        isSelected
                          ? 'bg-soft border-gold shadow-md'
                          : 'bg-parchment border-line hover:border-line-strong text-ink-soft'
                      }`}
                    >
                      <PlayCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-accent' : 'text-ink-muted'}`} />

                      <div className="flex-1">
                        <span className="text-[11px] font-semibold text-gold">
                          Lección {lesson.order}
                        </span>
                        <p className={`text-xs font-medium leading-snug mt-0.5 ${isSelected ? 'text-ink' : 'text-ink-soft'}`}>
                          {lesson.title}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
