import React, { useState } from 'react';
import { PlayCircle, Compass } from 'lucide-react';
import { getCourseSync } from '../../data/coursesData';
import { PageMeta } from '../../components/PageMeta';
import { BackdropImage } from '../../components/BackdropImage';

/** Ciclo de historia bíblica: episodios tomados del programa `panorama-biblico`. */
const panorama = getCourseSync('panorama-biblico');
const episodes = panorama.lessons;

export const PanoramaBiblicoPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState(episodes[0].id);
  const selected = episodes.find((lesson) => lesson.id === selectedId) ?? episodes[0];

  return (
    <div className="page">

      <PageMeta title={panorama.title} description={panorama.summary} path="/panorama-biblico" />

      {/* HERO */}
      <section className="page-hero page-hero--tall">
        <BackdropImage src={panorama.heroImage!} className="backdrop series__hero-bg" />
        <div className="page-hero__overlay" />

        <div className="page-hero__inner">
          <span className="page-hero__kicker">{panorama.kicker}</span>
          <h1 className="page-hero__title">Panorama Bíblico</h1>
        </div>
      </section>

      {/* Reproductor y episodios */}
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
                <span className="series__info-label">{panorama.tagline}</span>
                <h2 className="series__info-title">{selected.title}</h2>
                <p className="series__info-text">{selected.content}</p>
              </div>
            </div>
          </div>

          <div className="series__sidebar">
            <div className="panel">
              <h3 className="series__list-title">
                <Compass className="icon icon--md icon--gold" />
                <span>Episodios de la Serie</span>
              </h3>

              <div className="series__list series__list--scroll">
                {episodes.map((lesson, idx) => {
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
                        <span className="series__item-label">Parte {idx + 1}</span>
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
