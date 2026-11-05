import React, { useState } from 'react';
import { PlayCircle, Layers } from 'lucide-react';
import { getCourseSync } from '../../data/coursesData';

/** Cátedra de crítica textual: módulos tomados del programa `canones-biblicos`. */
const canones = getCourseSync('canones-biblicos');
const modules = canones.lessons;

export const CanonesBiblicosPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState(modules[0].id);
  const selected = modules.find((lesson) => lesson.id === selectedId) ?? modules[0];

  return (
    <div className="min-h-screen bg-page text-ink-soft">

      {/* HERO BANNER */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${canones.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />

        <div className="relative text-center px-4 z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-title-ancient">
            {canones.kicker}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink mt-2 drop-shadow-lg">
            Cánones Bíblicos
          </h1>
        </div>
      </section>

      {/* CONTENIDO Y VIDEOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Reproductor principal */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-surface border border-line shadow-2xl p-6 space-y-6">

              {selected.youtubeId && (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-line shadow-inner">
                  <iframe
                    src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                    title={selected.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {canones.tagline}
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink mt-1 mb-2">
                  {selected.title}
                </h2>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light bg-sunken p-4 rounded-xl border border-line">
                  {selected.content}
                </p>
              </div>

            </div>
          </div>

          {/* Temario de módulos */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-surface border border-line shadow-xl">
              <h3 className="font-serif text-xl font-bold text-ink mb-4 flex items-center space-x-2">
                <Layers className="w-5 h-5 text-gold" />
                <span>Módulos de la Cátedra</span>
              </h3>

              <div className="space-y-2.5">
                {modules.map((lesson, idx) => {
                  const isSelected = selected.id === lesson.id;

                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => setSelectedId(lesson.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 ${
                        isSelected
                          ? 'bg-soft border-gold shadow-md'
                          : 'bg-parchment border-line hover:border-line-strong text-ink-soft'
                      }`}
                    >
                      <PlayCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-accent' : 'text-ink-muted'}`} />
                      <div>
                        <span className="text-[10px] font-semibold text-gold uppercase tracking-wider block">
                          Módulo {idx + 1}
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
