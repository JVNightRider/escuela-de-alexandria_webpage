import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, ExternalLink, Heart, ArrowRight } from 'lucide-react';

export const CatedraExclusivaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-ink-soft">
      
      {/* HERO BANNER */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden border-b border-line">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000112-003d2003d5/scroll%201.jpg?ph=23a7ea3ebd')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />

        <div className="relative text-center px-4 z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-title-ancient">
            Cátedra Magistral
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink mt-2 drop-shadow-lg">
            Cátedra Exclusiva
          </h1>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* ENLACE DIRECTO AL ARCHIVO DE CRÓNICAS */}
        <div className="mb-12 p-4 rounded-xl bg-surface border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-gold" />
            <span className="text-xs sm:text-sm text-ink-soft">
              ¿Buscas las cátedras anteriores del Dr. Adolfo Roitman, Dr. Rene Krüger o Dr. Antonio Piñero?
            </span>
          </div>
          <Link
            to="/cronicas"
            className="px-4 py-2 rounded-lg bg-soft hover:bg-gold hover:text-ink text-ink-soft text-xs font-bold transition-all flex items-center space-x-1.5 flex-shrink-0"
          >
            <span>Ir al Archivo de Crónicas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* REJILLA EN 2 COLUMNAS (VIDEO & FOTO / TEXTO Y BIO) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Columna Izquierda: Video, Foto y Medios de Pago */}
          <div className="space-y-8">
            {/* Foto del Dr. Antonio Piñero */}
            <div className="rounded-2xl overflow-hidden border border-line shadow-2xl bg-surface">
              <img
                src="https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000130-922f2922f5/pi%C3%B1ero.jpg?ph=23a7ea3ebd"
                alt="Dr. Antonio Piñero"
                className="w-full h-80 object-cover object-top filter contrast-105"
              />
              <div className="p-4 bg-sunken border-t border-line text-center">
                <span className="font-serif text-sm font-bold text-accent">
                  Dr. Antonio Piñero Saenz
                </span>
                <p className="text-[11px] text-ink-muted">
                  Catedrático Emérito de Filología Griega &bull; Universidad Complutense de Madrid
                </p>
              </div>
            </div>

            {/* Video de YouTube Embebido */}
            <div className="rounded-2xl overflow-hidden border border-line shadow-xl bg-black">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/8it9MvBFOrI"
                  title="Presentación Cátedra Exclusiva Dr Antonio Piñero"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Pasarelas de Pago Originales */}
            <div className="p-6 rounded-2xl bg-surface border border-line text-center space-y-4 shadow-xl">
              <p className="text-xs font-semibold text-ink-soft">
                Puedes adquirir la grabación completa de esta cátedra a través de PAYU o colaborar mediante PAYPAL:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://biz.payulatam.com/L0d1b71A1229BF5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-ink font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Adquirir por PayU</span>
                </a>

                <a
                  href="https://www.paypal.com/donate?hosted_button_id=HSRYKCZY3EQ6U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <Heart className="w-4 h-4" />
                  <span>Apoyar por PayPal</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Temario y Biografía */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Cátedra Magistral
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
                Jesús de Nazareth según los textos Gnósticos
              </h2>
              <p className="text-sm font-semibold text-accent mt-1">
                Presentado por: Dr. Antonio Piñero
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-line space-y-4 text-sm text-ink-soft leading-relaxed font-light">
              <p>
                Un apasionante tema, muy controversial dentro del ámbito académico: La literatura Gnóstica de los primeros siglos, concerniente a la figura Histórica de Jesús de Nazareth, ¿Qué son los Textos Gnósticos? ¿Qué relación tienen con el Cristianismo primitivo?
              </p>
              
              <div className="space-y-2 pt-2 border-t border-line">
                <h4 className="font-serif text-base font-bold text-ink">Temas abordados en la cátedra:</h4>
                <ul className="space-y-2 text-xs list-disc list-inside text-ink-soft">
                  <li>¿Son los textos gnósticos una evidencia para el perfil histórico de Jesús?</li>
                  <li>¿Fueron alguna vez estos textos parte del Canon?</li>
                  <li>Comparación entre el Jesús Gnóstico y el Cristo Neotestamentario.</li>
                </ul>
              </div>
            </div>

            {/* Currículum Vitae del Expositor */}
            <div className="p-6 rounded-2xl bg-surface border border-line space-y-3">
              <h3 className="font-serif text-xl font-bold text-ink flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-gold" />
                <span>Perfil Académico del Ponente</span>
              </h3>
              <p className="text-xs text-ink-soft leading-relaxed font-light">
                Antonio Piñero es un filólogo clásico, escritor e historiador español, especializado en el judaísmo anterior al cristianismo, la vida de Jesús de Nazaret, la fundación del cristianismo y la lengua y literatura del Nuevo Testamento y cristianismo primitivo desde una perspectiva científica.
              </p>
              
              <ul className="space-y-1.5 text-xs text-ink-soft pt-2 border-t border-line">
                <li>&bull; Licenciado en Filosofía Pura: Universidad Complutense. Madrid (1968).</li>
                <li>&bull; Licenciado en Filología Clásica: Universidad de Salamanca (1970).</li>
                <li>&bull; Licenciado en Filología Bíblica Trilingüe: Universidad Pontificia de Salamanca (1976).</li>
                <li>&bull; Doctor en Filología Clásica: Universidad Complutense. Madrid (1974).</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
