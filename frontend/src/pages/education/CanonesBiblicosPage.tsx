import React, { useState } from 'react';
import { PlayCircle, Layers } from 'lucide-react';
import { getCourseSync } from '../../data/coursesData';
import { PageMeta } from '../../components/PageMeta';
import { BackdropImage } from '../../components/BackdropImage';

/** Cátedra de crítica textual: módulos tomados del programa `canones-biblicos`. */
const canones = getCourseSync('canones-biblicos');
const modules = canones.lessons;

export const CanonesBiblicosPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState(modules[0].id);
  const selected = modules.find((lesson) => lesson.id === selectedId) ?? modules[0];

  return (
    <div className="page">

      <PageMeta title={canones.title} description={canones.summary} path="/canones-biblicos" />

      {/* HERO */}
      <section className="page-hero page-hero--tall">
        <BackdropImage src={canones.heroImage!} className="backdrop series__hero-bg series__hero-bg--canon" />
        <div className="page-hero__overlay" />

        <div className="page-hero__inner">
          <span className="page-hero__kicker">{canones.kicker}</span>
          <h1 className="page-hero__title">Cánones Bíblicos</h1>
        </div>
      </section>

      {/* Reproductor y módulos */}
      <div className="series__body">
        <div className="series__grid">

          <div className="series__main">
            <div className="series__panel">
              {selected.youtubeId && (
                <div className="video-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div>
                <span className="series__info-label">{canones.tagline}</span>
                <h2 className="series__info-title">{selected.title}</h2>
                <p className="series__info-text">{selected.content}</p>
              </div>
            </div>
          </div>

          <div className="series__sidebar">
            <div className="panel">
              <h3 className="series__list-title">
                <Layers className="icon icon--md icon--gold" />
                <span>Módulos de la Cátedra</span>
              </h3>

              <div className="series__list">
                {modules.map((lesson, idx) => {
                  const isSelected = selected.id === lesson.id;

                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => setSelectedId(lesson.id)}
                      className={isSelected ? 'lesson-item is-selected' : 'lesson-item'}
                    >
                      <PlayCircle className="lesson-item__icon" />
                      <div>
                        <span className="series__item-label">Módulo {idx + 1}</span>
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
