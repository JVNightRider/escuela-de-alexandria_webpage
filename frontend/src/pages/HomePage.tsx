import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, ArrowRight, Award, Compass, ExternalLink } from 'lucide-react';
import { Course } from '../types';
import { api } from '../services/api';
import { YoutubeIcon } from '../components/SocialIcons';
import { ParallaxBackground } from '../components/ParallaxBackground';

export const HomePage: React.FC = () => {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.getCatalog()
      .then((data) => setFeaturedCourses(data.slice(0, 3)))
      .catch(() => { });
  }, []);

  return (
    <div className="min-h-screen bg-page text-ink-soft">

      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-line">
        {/* Lienzo de Alexandría: imagen pura sin opacidad ni alfa, con parallax suave */}
        <ParallaxBackground image="/images/alexandria-lienzo.jpeg" speed={0.2} blurClass="" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 z-10">
          <img
            src="/images/logo-emblema.png"
            alt="Escuela de Alexandría"
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 drop-shadow-xl"
          />

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-surface/90 border border-gold/50 text-accent text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Blog Académico & Divulgación Bíblica</span>
          </div>

          <div className="max-w-3xl mx-auto mb-6">
            <div className="h-0.5 bg-gold" />
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide uppercase text-ink py-5 leading-tight drop-shadow-sm">
              Escuela de Alexandría
            </h1>
            <div className="h-0.5 bg-gold" />
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-ink font-semibold leading-relaxed mb-10 drop-shadow-sm">
            Un equipo de investigadores de las bases históricas, lingüísticas, culturales y textuales que dieron forma a las Escrituras.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cursos"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Explorar Artículos & Seminarios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-soft hover:bg-soft border border-line-strong hover:border-gold text-ink-soft font-semibold text-sm transition-all flex items-center justify-center space-x-2"
            >
              <YoutubeIcon className="w-4 h-4 text-accent" />
              <span>Ver Canal de YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          </div>
        </div>
      </section>

      {/* BANNER REGLA INTELECTUAL ORIGINAL */}
      <section className="bg-gradient-to-r from-surface via-soft to-surface border-y border-line py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="font-serif italic text-lg sm:text-xl text-ink-soft leading-relaxed">
            "Les informamos a todos que en este sitio tenéis el derecho a estar en desacuerdo, pero también el deber de argumentar por qué."
          </blockquote>
          <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-3">
            Principio Académico de la Escuela
          </p>
        </div>
      </section>

      {/* QUIENES SOMOS, MISIÓN Y VISIÓN */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Imagen clásica */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-line/40 rounded-2xl blur-lg group-hover:opacity-100 transition duration-1000" />
            <div className="relative rounded-2xl overflow-hidden border border-line shadow-2xl bg-surface">
              <img
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
                alt="Biblioteca y Manuscritos Antiguos"
                className="w-full h-[520px] object-cover object-center filter saturate-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sunken via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">Patrimonio Histórico</span>
                <p className="font-serif text-lg text-ink-soft mt-1">Exégesis crítica, honesta y académica de los textos originales.</p>
              </div>
            </div>
          </div>

          {/* Textos institucionales */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Identidad</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
                ¿Quiénes Somos?
              </h2>
              <p className="text-ink-soft leading-relaxed mt-4 font-light">
                Somos un equipo cristiano de investigadores de las bases históricas, lingüísticas, culturales y textuales que se materializaron en la formación del texto Bíblico.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-line space-y-3">
              <div className="flex items-center space-x-3 text-accent">
                <Compass className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl font-bold text-ink">Misión</h3>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">
                Formar estudiantes e investigadores del texto bíblico, dotándolos de metodologías históricas, lingüísticas, culturales y textuales; motivando en ellos un cuestionamiento del dogma, y una exégesis crítica, honesta y académicamente plausible del texto bíblico.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-line space-y-3">
              <div className="flex items-center space-x-3 text-accent">
                <Award className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl font-bold text-ink">Visión</h3>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">
                Ser un equipo multidisciplinario que forme de manera óptima investigadores del texto Bíblico a la luz de herramientas históricas, lingüísticas, culturales y textuales, con el fin de generar reflexiones profundas sobre La Escritura y promover una cultura crítica en sus respectivos entornos de fe.
              </p>
            </div>

            {/* Cita bíblica Jacobo 3:17 */}
            <div className="border-l-2 border-gold pl-5 py-2">
              <p className="italic font-serif text-ink-soft text-sm leading-relaxed">
                "Pero la sabiduría de arriba, es primeramente pura, luego pacífica, comprensiva, dispuesta a razonar, llena de misericordia y de buenos frutos, imparcial, sincera."
              </p>
              <span className="block font-serif text-xs font-bold text-gold mt-2">Santiago 3:17</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEMINARIOS Y CONTENIDOS DESTACADOS */}
      <section className="py-20 bg-parchment border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Investigación & Contenidos</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
                Seminarios & Cátedras Abiertas
              </h2>
            </div>
            <Link
              to="/cursos"
              className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-sm text-accent hover:text-accent transition-colors"
            >
              <span>Ver todos los contenidos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="group rounded-2xl overflow-hidden bg-surface border border-line hover:border-gold/60 transition-all duration-300 flex flex-col shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-sunken">
                  {course.imageUrl ? (
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink-muted">
                      <BookOpen className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-surface/90 border border-gold/50 px-2.5 py-1 rounded-full text-xs font-semibold text-accent">
                    {course.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink group-hover:text-accent transition-colors mb-3">
                      {course.title}
                    </h3>
                    <p className="text-xs text-ink-soft line-clamp-3 leading-relaxed mb-6 font-light">
                      {course.summary}
                    </p>
                  </div>

                  <Link
                    to={`/cursos/${course.slug}`}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-soft hover:bg-gold hover:text-ink text-ink-soft text-xs font-bold transition-all border border-line-strong hover:border-transparent flex items-center justify-center space-x-2"
                  >
                    <span>Ver Clases y Videos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CANAL OFICIAL DE YOUTUBE */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-page to-surface border-t border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-sunken border border-red-800/60 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <YoutubeIcon className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-4">
            Canal Oficial de YouTube
          </h2>
          <p className="text-ink-soft max-w-xl mx-auto text-sm leading-relaxed mb-8 font-light">
            Transmisiones en vivo, seminarios gratuitos, análisis de manuscritos antiguos y debates teológicos en video con los profesores e investigadores de la Escuela de Alexandría.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Suscribirse al Canal</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
            <Link
              to="/sala-de-profesores"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-soft border border-gold/60 text-ink font-semibold text-sm transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Sala de Profesores (Q&A)</span>
            </Link>
            <Link
              to="/comunidad"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-soft hover:bg-soft border border-line-strong text-ink-soft font-semibold text-sm transition-all"
            >
              <span>Redes & Contacto</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
