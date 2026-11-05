import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, ArrowRight, Award, Compass, ExternalLink } from 'lucide-react';
import { Course } from '../types';
import { api } from '../services/api';
import { YoutubeIcon } from '../components/SocialIcons';
import { ParallaxBackground } from '../components/ParallaxBackground';
import { PageMeta } from '../components/PageMeta';
import { SITE } from '../data/site';

export const HomePage: React.FC = () => {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.getCatalog()
      .then((data) => setFeaturedCourses(data.slice(0, 3)))
      .catch(() => { });
  }, []);

  return (
    <div className="page">

      <PageMeta
        title={`${SITE.name} | Investigación Bíblica e Histórica`}
        description={SITE.description}
        path="/"
      />

      {/* HERO */}
      <section className="home-hero">
        <ParallaxBackground image="/images/alexandria-lienzo.jpeg" speed={0.2} />

        <div className="home-hero__inner">
          <img
            src="/images/logo-emblema.png"
            alt="Escuela de Alexandría"
            className="home-hero__emblem"
          />

          <div className="home-hero__tag">
            <Sparkles className="home-hero__tag-icon" />
            <span>Blog Académico &amp; Divulgación Bíblica</span>
          </div>

          <div className="home-hero__title-wrap">
            <div className="home-hero__rule" />
            <h1 className="home-hero__title">Escuela de Alexandría</h1>
            <div className="home-hero__rule" />
          </div>

          <p className="home-hero__lead">
            Un equipo de investigadores de las bases históricas, lingüísticas, culturales y textuales que dieron forma a las Escrituras.
          </p>

          <div className="home-hero__actions">
            <Link to="/cursos" className="button button--gold home-hero__cta">
              <span>Explorar Artículos &amp; Seminarios</span>
              <ArrowRight className="icon" />
            </Link>

            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--outline home-hero__cta"
            >
              <YoutubeIcon className="icon icon--accent" />
              <span>Ver Canal de YouTube</span>
              <ExternalLink className="icon icon--tiny icon--muted" />
            </a>
          </div>
        </div>
      </section>

      {/* CITA INSTITUCIONAL */}
      <section className="home-quote">
        <div className="home-quote__inner">
          <blockquote className="home-quote__text">
            "Les informamos a todos que en este sitio tenéis el derecho a estar en desacuerdo, pero también el deber de argumentar por qué."
          </blockquote>
          <p className="home-quote__caption">Principio Académico de la Escuela</p>
        </div>
      </section>

      {/* IDENTIDAD, MISIÓN Y VISIÓN */}
      <section className="home-about">
        <div className="container">
          <div className="home-about__grid">

            <div className="home-about__media">
              <div className="home-about__glow" />
              <div className="home-about__frame">
                <img
                  src="/images/home-biblioteca.jpg"
                  alt="Biblioteca y manuscritos antiguos"
                  className="home-about__image"
                />
                <div className="home-about__overlay" />
                <div className="home-about__caption">
                  <span className="home-about__caption-label">Patrimonio Histórico</span>
                  <p className="home-about__caption-text">
                    Exégesis crítica, honesta y académica de los textos originales.
                  </p>
                </div>
              </div>
            </div>

            <div className="home-about__body">
              <div>
                <span className="kicker">Identidad</span>
                <h2 className="home-about__title">¿Quiénes Somos?</h2>
                <p className="home-about__text">
                  Somos un equipo cristiano de investigadores de las bases históricas, lingüísticas, culturales y textuales que se materializaron en la formación del texto Bíblico.
                </p>
              </div>

              <div className="home-value">
                <div className="home-value__head">
                  <Compass className="home-value__icon" />
                  <h3 className="home-value__title">Misión</h3>
                </div>
                <p className="home-value__text">
                  Formar estudiantes e investigadores del texto bíblico, dotándolos de metodologías históricas, lingüísticas, culturales y textuales; motivando en ellos un cuestionamiento del dogma, y una exégesis crítica, honesta y académicamente plausible del texto bíblico.
                </p>
              </div>

              <div className="home-value">
                <div className="home-value__head">
                  <Award className="home-value__icon" />
                  <h3 className="home-value__title">Visión</h3>
                </div>
                <p className="home-value__text">
                  Ser un equipo multidisciplinario que forme de manera óptima investigadores del texto Bíblico a la luz de herramientas históricas, lingüísticas, culturales y textuales, con el fin de generar reflexiones profundas sobre La Escritura y promover una cultura crítica en sus respectivos entornos de fe.
                </p>
              </div>

              <div className="home-verse">
                <p className="home-verse__text">
                  "Pero la sabiduría de arriba, es primeramente pura, luego pacífica, comprensiva, dispuesta a razonar, llena de misericordia y de buenos frutos, imparcial, sincera."
                </p>
                <span className="home-verse__ref">Santiago 3:17</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEMINARIOS DESTACADOS */}
      <section className="home-courses">
        <div className="container">
          <div className="home-courses__head">
            <div>
              <span className="kicker">Investigación &amp; Contenidos</span>
              <h2 className="home-courses__title">Seminarios &amp; Cátedras Abiertas</h2>
            </div>
            <Link to="/cursos" className="home-courses__link">
              <span>Ver todos los contenidos</span>
              <ArrowRight className="icon" />
            </Link>
          </div>

          <div className="home-courses__grid">
            {featuredCourses.map((course) => (
              <div key={course.id} className="home-course">
                <div className="home-course__media">
                  {course.imageUrl ? (
                    <img src={course.imageUrl} alt={course.title} className="home-course__image" />
                  ) : (
                    <div className="home-course__placeholder">
                      <BookOpen className="icon icon--2xl" />
                    </div>
                  )}
                  <div className="home-course__category">{course.category}</div>
                </div>

                <div className="home-course__body">
                  <div>
                    <h3 className="home-course__title">{course.title}</h3>
                    <p className="home-course__summary">{course.summary}</p>
                  </div>

                  <Link to={`/cursos/${course.slug}`} className="home-course__cta">
                    <span>Ver Clases y Videos</span>
                    <ArrowRight className="icon icon--tiny" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CANAL DE YOUTUBE */}
      <section className="home-youtube">
        <div className="home-youtube__inner">
          <div className="home-youtube__badge">
            <YoutubeIcon className="home-youtube__icon" />
          </div>
          <h2 className="home-youtube__title">Canal Oficial de YouTube</h2>
          <p className="home-youtube__text">
            Transmisiones en vivo, seminarios gratuitos, análisis de manuscritos antiguos y debates teológicos en video con los profesores e investigadores de la Escuela de Alexandría.
          </p>
          <div className="home-youtube__actions">
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--accent"
            >
              <YoutubeIcon className="icon" />
              <span>Suscribirse al Canal</span>
              <ExternalLink className="icon icon--tiny" />
            </a>
            <Link to="/sala-de-profesores" className="button button--raised">
              <Sparkles className="icon icon--gold" />
              <span>Sala de Profesores (Q&amp;A)</span>
            </Link>
            <Link to="/comunidad" className="button button--soft">
              <span>Redes &amp; Contacto</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
