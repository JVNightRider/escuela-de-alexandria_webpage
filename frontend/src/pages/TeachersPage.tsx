import React from 'react';
import { GraduationCap } from 'lucide-react';
import { teachersData } from '../data/teachersData';

export const TeachersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-ink-soft py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Cuerpo Docente</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-2 mb-6">
            Nuestros Profesores & Tutores
          </h1>
          <p className="text-ink-soft font-light text-base leading-relaxed">
            Un equipo multidisciplinario dedicado al análisis riguroso de las fuentes lingüísticas, arqueológicas e históricas que configuran los manuscritos bíblicos.
          </p>
        </div>

        {/* Lista de Profesores */}
        <div className="space-y-16">
          {teachersData.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`p-8 sm:p-10 rounded-2xl bg-surface border border-line shadow-xl flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Foto del Profesor */}
              <div className="w-48 sm:w-60 flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/40 to-line/60 rounded-xl blur-sm" />
                  <div className="relative rounded-xl overflow-hidden border border-gold/30 bg-surface">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-72 sm:h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Información y Biografía */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    {teacher.name}
                  </h2>
                  <p className="text-sm font-semibold text-accent mt-1 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-gold" />
                    <span>{teacher.title}</span>
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-ink-soft font-light leading-relaxed border-t border-line pt-4">
                  {teacher.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
