import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import { PageMeta } from '../components/PageMeta';
import { SITE } from '../data/site';

export const CommunityPage: React.FC = () => {
  return (
    <div className="page page--pad">
      <PageMeta
        title="Comunidad & Redes"
        description="Canales oficiales, redes sociales y espacios de diálogo de la Escuela de Alexandría para el debate respetuoso y el análisis exegético."
        path="/comunidad"
      />

      <div className="container container--small">
        {/* Cabecera */}
        <div className="community__head">
          <div className="community__tag">
            <Users className="community__tag-icon" />
            <span>Espacio de Diálogo</span>
          </div>
          <h1 className="community__title">Comunidad Escuela de Alexandría</h1>
          <p className="community__text">
            Un punto de encuentro para el debate respetuoso, el análisis exegético y la difusión de investigaciones históricas.
          </p>
        </div>

        {/* Canales oficiales */}
        <div className="community__grid">
          <a
            href={SITE.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="community-card"
          >
            <div>
              <div className="community-card__icon-box">
                <YoutubeIcon className="community-card__icon" />
              </div>
              <h3 className="community-card__title">Canal de YouTube</h3>
              <p className="community-card__text">
                Transmisiones en vivo, debates teológicos y análisis de manuscritos en video con nuestros profesores.
              </p>
            </div>
            <div className="community-card__action">
              <span>Visitar Canal</span>
              <ExternalLink className="icon icon--tiny" />
            </div>
          </a>

          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="community-card"
          >
            <div>
              <div className="community-card__icon-box">
                <InstagramIcon className="community-card__icon" />
              </div>
              <h3 className="community-card__title">Instagram Oficial</h3>
              <p className="community-card__text">
                Publicaciones diarias sobre etimologías en hebreo y griego, arqueología bíblica y noticias del equipo.
              </p>
            </div>
            <div className="community-card__action">
              <span>Seguir en Instagram</span>
              <ExternalLink className="icon icon--tiny" />
            </div>
          </a>

          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="community-card"
          >
            <div>
              <div className="community-card__icon-box">
                <FacebookIcon className="community-card__icon" />
              </div>
              <h3 className="community-card__title">Comunidad en Facebook</h3>
              <p className="community-card__text">
                Artículos académicos, eventos, círculos de lectura y foros de debate abiertos a estudiantes y público general.
              </p>
            </div>
            <div className="community-card__action">
              <span>Unirse en Facebook</span>
              <ExternalLink className="icon icon--tiny" />
            </div>
          </a>
        </div>

        {/* Regla de diálogo */}
        <div className="community__rule">
          <h2 className="community__rule-title">Nuestra Regla de Oro en los Foros</h2>
          <p className="community__rule-quote">
            "Tenéis el derecho a estar en desacuerdo, pero también el deber de argumentar por qué."
          </p>
          <p className="community__rule-text">
            Fomentamos una cultura donde las opiniones se sustentan en fuentes paleográficas, gramaticales y contextuales, preservando siempre el respeto y el rigor mutuo.
          </p>
        </div>
      </div>
    </div>
  );
};
