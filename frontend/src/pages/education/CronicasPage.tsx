import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ExternalLink, ShieldAlert } from 'lucide-react';
import { getCourseSync } from '../../data/coursesData';
import { PageMeta } from '../../components/PageMeta';
import { BackdropImage } from '../../components/BackdropImage';

/** Archivo de cátedras magistrales: todo el contenido proviene del programa `cronicas`. */
const cronicas = getCourseSync('cronicas');

export const CronicasPage: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="page">

      <PageMeta title="Crónicas" description={cronicas.summary} path="/cronicas" />

      {/* HERO */}
      <section className="page-hero page-hero--tall">
        <BackdropImage src={cronicas.heroImage!} className="backdrop cronicas__hero-bg" />
        <div className="page-hero__overlay" />

        <div className="page-hero__inner">
          <span className="page-hero__kicker">{cronicas.kicker}</span>
          <h1 className="page-hero__title">Crónicas</h1>
        </div>
      </section>

      <div className="cronicas__body">

        <div className="cronicas__intro">
          <blockquote className="cronicas__quote">
            "Crónicas corresponde al archivo de la sección de la Escuela de Alexandria denominada Cátedra Exclusiva. Presione la fotografía de la cátedra de su predilección para acceder a los medios de pago."
          </blockquote>
        </div>

        {/* Reproductor de la cátedra abierta */}
        {activeVideoId && (
          <div className="cronicas__player">
            <div className="cronicas__player-head">
              <h3 className="cronicas__player-title">
                <PlayCircle className="icon icon--md icon--gold" />
                <span>Reproduciendo Cátedra en Video</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="cronicas__player-close"
              >
                Cerrar video
              </button>
            </div>
            <div className="video-frame">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Cátedra magistral"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Rejilla de cátedras */}
        <div className="cronicas__grid">
          {cronicas.lessons.map((lesson) => (
            <div key={lesson.id} className="cronica-card">
              <div className="cronica-card__media">
                {lesson.image && (
                  <img src={lesson.image} alt={lesson.title} className="cronica-card__image" />
                )}

                <div className="cronica-card__badge">
                  {lesson.isFree ? (
                    <span className="cronica-card__badge--free">Gratis</span>
                  ) : (
                    <span className="cronica-card__badge--paid">Cátedra Magistral</span>
                  )}
                </div>
              </div>

              <div className="cronica-card__body">
                <div>
                  <h2 className="cronica-card__title">{lesson.title}</h2>
                  <p className="cronica-card__speaker">{lesson.speaker}</p>
                  {lesson.isFree && (
                    <span className="cronica-card__note">(Grabación abierta al público)</span>
                  )}
                </div>

                <div className="cronica-card__actions">
                  {lesson.isFree && lesson.youtubeId ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(lesson.youtubeId ?? null)}
                      className="cronica-card__buy"
                    >
                      <PlayCircle className="icon" />
                      <span>Ver Cátedra Gratuita</span>
                    </button>
                  ) : (
                    <div className="cronica-card__buy-group">
                      <a
                        href={lesson.payuLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cronica-card__buy"
                      >
                        <ExternalLink className="icon" />
                        <span>Adquirir Grabación por PayU</span>
                      </a>
                      {lesson.courseSlug && (
                        <Link to={`/${lesson.courseSlug}`} className="cronica-card__details">
                          Ver Detalles de la Cátedra
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instrucciones de comprobante */}
        <div className="cronicas__notice">
          <p className="cronicas__notice-text">
            Para las cátedras de pago, favor enviar el comprobante de pago al siguiente correo:{' '}
            <a href="mailto:escueladealexandria@gmail.com" className="cronicas__notice-link">
              escueladealexandria@gmail.com
            </a>
          </p>
          <p className="cronicas__notice-note">
            y recibirá el enlace con la grabación por el mismo medio.
          </p>
        </div>

        {/* Derechos de autor */}
        <div className="cronicas__legal">
          <div className="cronicas__legal-head">
            <ShieldAlert className="icon" />
            <span>Propiedad Intelectual Protegida</span>
          </div>
          <p className="cronicas__legal-text">
            El presente material videográfico está protegido por derechos de autor y es propiedad exclusiva de sus respectivos autores-expositores. Queda prohibida su reproducción total o parcial sin la autorización expresa de los propietarios de los derechos de autor.
          </p>
          <div className="cronicas__legal-mark">
            &reg; 2020-2021 ESCUELA DE ALEXANDRÍA
          </div>
        </div>

      </div>
    </div>
  );
};
