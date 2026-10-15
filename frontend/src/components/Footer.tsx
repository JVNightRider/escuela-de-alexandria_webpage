import React from 'react';
import { Heart, MapPin, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bark text-page/80 pt-16 pb-12 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 flex justify-center">
          <Logo tone="dark" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Columna 1: Contacto y Redes */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-page tracking-wide border-b border-gold/40 pb-3">
              Contacto
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light font-semibold">Instagram</span>
                <a
                  href="https://www.instagram.com/escueladealexandria/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-page/80 hover:text-gold-light transition-colors mt-1"
                >
                  <InstagramIcon className="w-4 h-4 text-gold-light" />
                  <span>@escueladealexandria</span>
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light font-semibold">Facebook</span>
                <a
                  href="https://www.facebook.com/escueladealexandria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-page/80 hover:text-gold-light transition-colors mt-1"
                >
                  <FacebookIcon className="w-4 h-4 text-gold-light" />
                  <span>Escuela de Alexandria</span>
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light font-semibold">YouTube</span>
                <a
                  href="https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-page/80 hover:text-gold-light transition-colors mt-1"
                >
                  <YoutubeIcon className="w-4 h-4 text-gold-light" />
                  <span>@escueladealexandriaEdA</span>
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-light font-semibold">Escríbenos</span>
                <a
                  href="mailto:escueladealexandria@gmail.com"
                  className="flex items-center space-x-2 text-page/80 hover:text-gold-light transition-colors mt-1"
                >
                  <Mail className="w-4 h-4 text-gold-light" />
                  <span>escueladealexandria@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Donaciones y Ofrendas */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-page tracking-wide border-b border-gold/40 pb-3">
              Donaciones y Ofrendas
            </h3>
            <p className="text-sm leading-relaxed text-page/80 font-light">
              Ponemos a disposición de nuestros queridos hermanos y amigos vías para apoyar económicamente este proyecto.
              Nuestras habilidades y talentos están al servicio de la investigación y del cuerpo de Cristo, ¡gracias por su respaldo y que Dios les multiplique!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://www.paypal.com/donate?hosted_button_id=HSRYKCZY3EQ6U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-white text-xs font-semibold shadow-md transition-all text-center"
              >
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                DONAR POR PAYPAL
              </a>

              <a
                href="https://biz.payulatam.com/L0d1b71FF1AC80B"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-bark text-xs font-bold shadow-md transition-all text-center"
              >
                DONAR 5 USD (PAYU)
              </a>
            </div>
          </div>

          {/* Columna 3: Ubicación */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-page tracking-wide border-b border-gold/40 pb-3 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gold-light" />
              <span>Sede Académica</span>
            </h3>

            <p className="text-xs text-page/70">
              Medellín, Antioquia, Colombia. Transmisión e investigación internacional online.
            </p>

            <div className="rounded-xl overflow-hidden border border-gold/40 h-44 shadow-lg">
              <iframe
                title="Ubicación Medellín"
                src="https://maps.google.com/maps?q=Medellin%2C%20Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 sepia-[.4] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Cita Inferior y Derechos */}
        <div className="border-t border-gold/30 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-page/70 gap-4">
          <p className="italic font-serif text-page/90 text-center md:text-left">
            "Tenéis el derecho a estar en desacuerdo, pero también el deber de argumentar por qué."
          </p>
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Escuela de Alexandría. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
