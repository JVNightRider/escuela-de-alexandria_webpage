import React from 'react';
import { Heart, MapPin, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { Logo } from './Logo';
import { SITE } from '../data/site';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer__brand">
          <Logo tone="dark" />
        </div>

        <div className="footer__grid">

          {/* Contacto y redes */}
          <div className="footer__col">
            <h3 className="footer__heading">Contacto</h3>

            <div className="footer__links">
              <div>
                <span className="footer__label">Instagram</span>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <InstagramIcon className="icon icon--gold-light" />
                  <span>@escueladealexandria</span>
                </a>
              </div>

              <div>
                <span className="footer__label">Facebook</span>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <FacebookIcon className="icon icon--gold-light" />
                  <span>Escuela de Alexandria</span>
                </a>
              </div>

              <div>
                <span className="footer__label">YouTube</span>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <YoutubeIcon className="icon icon--gold-light" />
                  <span>@escueladealexandriaEdA</span>
                </a>
              </div>

              <div>
                <span className="footer__label">Escríbenos</span>
                <a href={`mailto:${SITE.email}`} className="footer__link">
                  <Mail className="icon icon--gold-light" />
                  <span>{SITE.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Donaciones y ofrendas */}
          <div className="footer__col">
            <h3 className="footer__heading">Donaciones y Ofrendas</h3>
            <p className="footer__text">
              Ponemos a disposición de nuestros queridos hermanos y amigos vías para apoyar económicamente este proyecto.
              Nuestras habilidades y talentos están al servicio de la investigación y del cuerpo de Cristo, ¡gracias por su respaldo y que Dios les multiplique!
            </p>

            <div className="footer__actions">
              <a
                href={SITE.donations.paypal}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__donate footer__donate--paypal"
              >
                <Heart className="icon icon--tiny" />
                DONAR POR PAYPAL
              </a>

              <a
                href={SITE.donations.payu}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__donate footer__donate--payu"
              >
                DONAR 5 USD (PAYU)
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="footer__col">
            <h3 className="footer__heading footer__heading--icon">
              <MapPin className="icon icon--md icon--gold-light" />
              <span>Sede Académica</span>
            </h3>

            <p className="footer__meta">
              {SITE.address.city}, {SITE.address.region}, {SITE.address.country}. Transmisión e investigación internacional online.
            </p>

            <div className="footer__map">
              <iframe
                title="Ubicación Medellín"
                src="https://maps.google.com/maps?q=Medellin%2C%20Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="footer__map-frame"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Cita y derechos */}
        <div className="footer__bottom">
          <p className="footer__quote">
            "Tenéis el derecho a estar en desacuerdo, pero también el deber de argumentar por qué."
          </p>
          <p className="footer__copy">
            &copy; {CURRENT_YEAR} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
