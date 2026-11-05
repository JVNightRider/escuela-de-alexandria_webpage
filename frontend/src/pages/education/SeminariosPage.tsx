import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Maximize2, X, Download, ExternalLink } from 'lucide-react';
import { brochure, seminariosData } from '../../data/seminariosData';
import { PageMeta } from '../../components/PageMeta';
import { BackdropImage } from '../../components/BackdropImage';

export const SeminariosPage: React.FC = () => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const brochureImageSrc = brochure.image;

  return (
    <div className="page">

      <PageMeta
        title="Educación & Seminarios"
        description="Oferta académica 2026-2027 de la Escuela de Alexandría: malla curricular, seminarios dictados y cátedras de ciencias bíblicas."
        path="/seminarios"
      />

      {/* HERO */}
      <section className="page-hero page-hero--small">
        <BackdropImage src={brochure.heroImage} className="backdrop seminars__hero-bg" />
        <div className="page-hero__overlay page-hero__overlay--strong" />

        <div className="page-hero__inner">
          <span className="page-hero__kicker">Programas Académicos &amp; Cátedras</span>
          <h1 className="page-hero__title page-hero__title--small">Educación &amp; Seminarios</h1>
          <p className="page-hero__text">
            Malla curricular oficial de la Escuela de Alexandría y archivo histórico de seminarios impartidos.
          </p>
        </div>
      </section>

      <div className="seminars__body">

        {/* Brochure */}
        <section aria-labelledby="brochure-title" className="seminars__section">
          <div className="seminars__head">
            <div>
              <span className="seminars__label">Folleto Informativo Oficial</span>
              <h2 id="brochure-title" className="seminars__title">{brochure.title}</h2>
              <p className="seminars__subtitle">{brochure.subtitle}</p>
            </div>

            <div className="seminars__actions">
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="seminars__action seminars__action--zoom"
              >
                <Maximize2 className="icon icon--tiny icon--gold" />
                <span>Ampliar Malla</span>
              </button>
              <a
                href={brochureImageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="seminars__action seminars__action--open"
              >
                <ExternalLink className="icon icon--tiny" />
                <span>Ver Original</span>
              </a>
            </div>
          </div>

          <div className="seminars__brochure">
            <div
              onClick={() => setIsZoomOpen(true)}
              className="seminars__canvas"
              title="Haz clic para ver en pantalla completa"
            >
              <img
                src={brochureImageSrc}
                alt={`Malla Curricular - Escuela de Alexandría - ${brochure.subtitle}`}
                className="seminars__image"
              />
              <div className="seminars__hint">
                <span className="seminars__hint-badge">
                  <Maximize2 className="icon icon--tiny icon--gold" />
                  <span>Clic para ampliar</span>
                </span>
              </div>
            </div>

            <div className="seminars__foot">
              <p className="seminars__areas">
                Nuestra formación integral comprende las áreas de{' '}
                {brochure.areas.map((area, index) => (
                  <React.Fragment key={area}>
                    {index > 0 && (index === brochure.areas.length - 1 ? ' y ' : ', ')}
                    <strong>{area}</strong>
                  </React.Fragment>
                ))}{' '}
                ({brochure.languages}).
              </p>
              <a href={brochureImageSrc} download={brochure.fileName} className="seminars__download">
                <Download className="icon icon--xs icon--gold" />
                <span>Descargar imagen</span>
              </a>
            </div>
          </div>
        </section>

        {/* Seminarios dictados */}
        <section aria-labelledby="seminarios-title" className="seminars__section">
          <div className="seminars__list-head">
            <span className="seminars__label">Cátedras y Archivo Editorial</span>
            <h2 id="seminarios-title" className="seminars__title">Seminarios Dictados</h2>
            <p className="seminars__subtitle">
              Registro de seminarios y módulos impartidos por los docentes de la Escuela de Alexandría.
            </p>
          </div>

          <div className="seminars__items">
            {seminariosData.map((item) => (
              <article key={item.id} className="seminar-card">
                <div className="seminar-card__media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="seminar-card__image"
                    loading="lazy"
                  />
                </div>

                <div className="seminar-card__body">
                  <div className="seminar-card__date">
                    <Calendar className="icon icon--tiny" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="seminar-card__title">{item.title}</h3>
                  <p className="seminar-card__text">{item.summary}</p>

                  <Link to="/cursos" className="seminar-card__cta">
                    <span>Ver lecciones y temario</span>
                    <ArrowRight className="icon icon--tiny" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox de la malla */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ampliación Malla Curricular"
          className="lightbox"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="lightbox__dialog" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__bar">
              <span className="lightbox__title">Malla Curricular &bull; {brochure.subtitle}</span>
              <div className="lightbox__actions">
                <a
                  href={brochureImageSrc}
                  download={brochure.fileName}
                  className="lightbox__action"
                  title="Descargar"
                >
                  <Download className="icon" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="lightbox__action"
                  title="Cerrar"
                >
                  <X className="icon icon--md" />
                </button>
              </div>
            </div>

            <div className="lightbox__body">
              <img src={brochureImageSrc} alt="Malla Curricular en detalle" className="lightbox__image" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
