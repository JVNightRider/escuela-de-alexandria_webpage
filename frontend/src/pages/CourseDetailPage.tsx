import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, PlayCircle, ArrowLeft, ExternalLink, Lock } from 'lucide-react';
import { Course, Lesson } from '../types';
import { api } from '../services/api';
import { PageMeta } from '../components/PageMeta';

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
      <div className="page course-detail__state">
        <p>Cargando programa del seminario...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="page course-detail__state">
        <h2 className="course-detail__notfound">Seminario no encontrado</h2>
        <Link to="/cursos" className="course-detail__back">
          <ArrowLeft className="icon" />
          <span>Volver al catálogo</span>
        </Link>
      </div>
    );
  }

  /** La grabación requiere compra cuando no hay video embebido y sí pasarela de pago. */
  const isPaidOnly = Boolean(selectedLesson && !selectedLesson.youtubeId && selectedLesson.payuLink);

  return (
    <div className="page page--pad-sm">
      <PageMeta title={course.title} description={course.summary} path={`/cursos/${course.slug}`} />

      <div className="container">
        <Link to="/cursos" className="course-detail__back">
          <ArrowLeft className="icon" />
          <span>Volver al catálogo de cursos</span>
        </Link>

        {/* Cabecera del curso */}
        <div className="course-detail__header">
          <span className="course-detail__badge">{course.category}</span>
          <h1 className="course-detail__title">{course.title}</h1>
          <p className="course-detail__summary">{course.summary}</p>
          {course.description && <p className="course-detail__description">{course.description}</p>}
          {course.lecturer && (
            <p className="course-detail__lecturer">
              Expositor: {course.lecturer.name} &middot; {course.lecturer.role}
            </p>
          )}
        </div>

        <div className="course-detail__grid">
          {/* Reproductor y material de la lección */}
          <div className="course-detail__main">
            {selectedLesson ? (
              <div className="lesson-view">
                <div className="lesson-view__head">
                  <div>
                    <span className="lesson-view__label">Lección {selectedLesson.order}</span>
                    <h2 className="lesson-view__title">{selectedLesson.title}</h2>
                    {selectedLesson.speaker && (
                      <p className="lesson-view__speaker">{selectedLesson.speaker}</p>
                    )}
                  </div>
                </div>

                <div className="lesson-view__body">
                  {selectedLesson.youtubeId && (
                    <div className="video-frame">
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedLesson.youtubeId}`}
                        title={selectedLesson.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {isPaidOnly && (
                    <div className="lesson-view__paid">
                      <div className="lesson-view__paid-text">
                        <Lock className="lesson-view__paid-icon" />
                        <p className="lesson-view__paid-note">
                          Esta grabación es de acceso restringido. Adquiérela por PayU y recíbela en tu correo
                          junto con las indicaciones de acceso.
                        </p>
                      </div>
                      <a
                        href={selectedLesson.payuLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--gold button--sm button--flat"
                      >
                        <ExternalLink className="icon icon--tiny" />
                        <span>Adquirir por PayU</span>
                      </a>
                    </div>
                  )}

                  <div>
                    <h3 className="lesson-view__notes-title">Notas Académicas y Exégesis</h3>
                    <p className="exegesis">{selectedLesson.content}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="course-detail__empty">Selecciona una lección para comenzar.</div>
            )}
          </div>

          {/* Temario */}
          <div className="course-detail__sidebar">
            <div className="panel">
              <h3 className="panel__title">
                <BookOpen className="icon--md icon--gold" />
                <span>Temario del Seminario</span>
              </h3>

              <div className="lesson-list">
                {course.lessons.map((lesson) => {
                  const isSelected = selectedLesson?.id === lesson.id;
                  const lessonClass = isSelected ? 'lesson-item is-selected' : 'lesson-item';

                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => setSelectedLesson(lesson)}
                      className={lessonClass}
                    >
                      {lesson.youtubeId ? (
                        <PlayCircle className="lesson-item__icon" />
                      ) : (
                        <Lock className="lesson-item__icon" />
                      )}

                      <div>
                        <span className="lesson-item__label">Lección {lesson.order}</span>
                        <p className="lesson-item__title">{lesson.title}</p>
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
