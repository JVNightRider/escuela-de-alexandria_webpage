import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, ExternalLink, Heart, ArrowRight } from 'lucide-react';
import { getCourseSync } from '../../data/coursesData';
import { PageMeta } from '../../components/PageMeta';
import { BackdropImage } from '../../components/BackdropImage';
import { SITE } from '../../data/site';

/** Cátedra magistral: contenido y ficha del ponente tomados del programa `catedra-exclusiva`. */
const catedra = getCourseSync('catedra-exclusiva');
const lecturer = catedra.lecturer!;
/** Video de presentación (primera sesión abierta del programa). */
const presentation = catedra.lessons.find((lesson) => lesson.youtubeId);
/** Grabación completa sujeta a pago. */
const fullLecture = catedra.lessons.find((lesson) => lesson.payuLink);
const payuLink = lecturer.payuLink ?? fullLecture?.payuLink;

export const CatedraExclusivaPage: React.FC = () => {
  return (
    <div className="page">

      <PageMeta title={catedra.title} description={catedra.summary} path="/catedra-exclusiva" />

      {/* HERO */}
      <section className="page-hero page-hero--tall">
        <BackdropImage src={catedra.heroImage!} className="backdrop catedra__hero-bg" />
        <div className="page-hero__overlay" />

        <div className="page-hero__inner">
          <span className="page-hero__kicker">{catedra.kicker}</span>
          <h1 className="page-hero__title">Cátedra Exclusiva</h1>
        </div>
      </section>

      <div className="catedra__body">

        {/* Enlace al archivo de Crónicas */}
        <div className="catedra__archive">
          <div className="catedra__archive-text">
            <BookOpen className="catedra__archive-icon" />
            <span className="catedra__archive-copy">
              ¿Buscas las cátedras anteriores del Dr. Adolfo Roitman, Dr. Rene Krüger o Dr. Antonio Piñero?
            </span>
          </div>
          <Link to="/cronicas" className="catedra__archive-link">
            <span>Ir al Archivo de Crónicas</span>
            <ArrowRight className="icon icon--tiny" />
          </Link>
        </div>

        <div className="catedra__grid">

          {/* Columna izquierda: retrato, video y pagos */}
          <div className="catedra__col">
            <div className="catedra__portrait">
              <img src={lecturer.portrait} alt={lecturer.name} className="catedra__portrait-image" />
              <div className="catedra__portrait-caption">
                <span className="catedra__lecturer">{lecturer.name}</span>
                <p className="catedra__lecturer-role">{lecturer.role}</p>
              </div>
            </div>

            {presentation?.youtubeId && (
              <div className="catedra__video">
                <div className="video-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${presentation.youtubeId}`}
                    title={`Presentación Cátedra Exclusiva ${lecturer.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="catedra__payment">
              <p className="catedra__payment-text">
                Puedes adquirir la grabación completa de esta cátedra a través de PAYU o colaborar mediante PAYPAL:
              </p>

              <div className="catedra__payment-actions">
                {payuLink && (
                  <a
                    href={payuLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--gold button--sm button--flat"
                  >
                    <ExternalLink className="icon icon--tiny" />
                    <span>Adquirir por PayU</span>
                  </a>
                )}

                <a
                  href={SITE.donations.paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--accent button--sm button--flat"
                >
                  <Heart className="icon icon--tiny" />
                  <span>Apoyar por PayPal</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha: temario y perfil */}
          <div className="catedra__col">
            <div className="catedra__intro">
              <div>
                <span className="kicker">Cátedra Magistral</span>
                <h2 className="catedra__title">{catedra.title}</h2>
                <p className="catedra__presenter">Presentado por: {lecturer.name}</p>
              </div>

              <div className="catedra__card">
                <p>{catedra.description}</p>

                <div className="catedra__topics">
                  <h4 className="catedra__topics-title">Temas abordados en la cátedra:</h4>
                  <ul className="catedra__topics-list">
                    {lecturer.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="catedra__profile">
                <h3 className="catedra__profile-title">
                  <GraduationCap className="icon icon--md icon--gold" />
                  <span>Perfil Académico del Ponente</span>
                </h3>
                <p className="catedra__profile-bio">{lecturer.bio}</p>

                <ul className="catedra__credentials">
                  {lecturer.credentials.map((credential) => (
                    <li key={credential}>&bull; {credential}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
