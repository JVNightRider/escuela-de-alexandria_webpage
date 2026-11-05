import React from 'react';
import { GraduationCap } from 'lucide-react';
import { teachersData } from '../data/teachersData';
import { PageMeta } from '../components/PageMeta';

export const TeachersPage: React.FC = () => {
  return (
    <div className="page page--pad">
      <PageMeta
        title="Profesores & Tutores"
        description="Cuerpo docente de la Escuela de Alexandría: especialistas en divinidad, hebreo y griego bíblico, judaísmo del Segundo Templo y crítica textual."
        path="/profesores"
      />

      <div className="container container--mid">
        {/* Cabecera */}
        <div className="teachers__head">
          <span className="kicker">Cuerpo Docente</span>
          <h1 className="teachers__title">Nuestros Profesores &amp; Tutores</h1>
          <p className="teachers__text">
            Un equipo multidisciplinario dedicado al análisis riguroso de las fuentes lingüísticas, arqueológicas e históricas que configuran los manuscritos bíblicos.
          </p>
        </div>

        {/* Listado */}
        <div className="teachers__list">
          {teachersData.map((teacher, index) => (
            <div
              key={teacher.id}
              className={index % 2 === 1 ? 'teacher teacher--reverse' : 'teacher'}
            >
              <div className="teacher__media">
                <div className="teacher__portrait">
                  <div className="teacher__glow" />
                  <div className="teacher__frame">
                    <img src={teacher.image} alt={teacher.name} className="teacher__photo" />
                  </div>
                </div>
              </div>

              <div className="teacher__body">
                <div>
                  <h2 className="teacher__name">{teacher.name}</h2>
                  <p className="teacher__role">
                    <GraduationCap className="teacher__role-icon" />
                    <span>{teacher.title}</span>
                  </p>
                </div>

                <div className="teacher__bio">
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
