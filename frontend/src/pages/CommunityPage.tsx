import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from '../components/SocialIcons';

export const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-ink-soft py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Espacio de Diálogo</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-1 mb-4">
            Comunidad Escuela de Alexandría
          </h1>
          <p className="text-ink-soft font-light text-base leading-relaxed">
            Un punto de encuentro para el debate respetuoso, el análisis exegético y la difusión de investigaciones históricas.
          </p>
        </div>

        {/* Canales Oficiales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <a
            href="https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-surface border border-line hover:border-gold transition-all shadow-xl flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sunken border border-line flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <YoutubeIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Canal de YouTube</h3>
              <p className="text-xs text-ink-soft font-light leading-relaxed">
                Transmisiones en vivo, debates teológicos y análisis de manuscritos en video con nuestros profesores.
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-xs font-semibold text-accent group-hover:text-accent-dark">
              <span>Visitar Canal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/escueladealexandria/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-surface border border-line hover:border-gold transition-all shadow-xl flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sunken border border-line flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Instagram Oficial</h3>
              <p className="text-xs text-ink-soft font-light leading-relaxed">
                Publicaciones diarias sobre etimologías en hebreo y griego, arqueología bíblica y noticias del equipo.
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-xs font-semibold text-accent group-hover:text-accent-dark">
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href="https://www.facebook.com/escueladealexandria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-surface border border-line hover:border-gold transition-all shadow-xl flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sunken border border-line flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <FacebookIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Comunidad en Facebook</h3>
              <p className="text-xs text-ink-soft font-light leading-relaxed">
                Artículos académicos, eventos, círculos de lectura y foros de debate abiertos a estudiantes y público general.
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-xs font-semibold text-accent group-hover:text-accent-dark">
              <span>Unirse en Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Declaración de Diálogo */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-surface via-soft to-surface border border-line text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-ink">
            Nuestra Regla de Oro en los Foros
          </h2>
          <p className="text-sm text-accent italic font-serif max-w-2xl mx-auto leading-relaxed">
            "Tenéis el derecho a estar en desacuerdo, pero también el deber de argumentar por qué."
          </p>
          <p className="text-xs text-ink-soft max-w-xl mx-auto leading-relaxed font-light">
            Fomentamos una cultura donde las opiniones se sustentan en fuentes paleográficas, gramaticales y contextuales, preservando siempre el respeto y el rigor mutuo.
          </p>
        </div>

      </div>
    </div>
  );
};
