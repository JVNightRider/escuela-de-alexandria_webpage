import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { Logo } from './Logo';
import { SITE } from '../data/site';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eduDropdownOpen, setEduDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isEduActive =
    location.pathname.startsWith('/seminarios') ||
    location.pathname.startsWith('/catedra-exclusiva') ||
    location.pathname.startsWith('/cronicas') ||
    location.pathname.startsWith('/panorama-biblico') ||
    location.pathname.startsWith('/canones-biblicos') ||
    location.pathname.startsWith('/sala-de-profesores') ||
    location.pathname.startsWith('/cursos');

  const closeDropdown = () => setEduDropdownOpen(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          {/* Logo oficial */}
          <Link to="/" aria-label="Escuela de Alexandría - Inicio" className="brand">
            <Logo />
          </Link>

          {/* Menú de escritorio */}
          <nav className="nav">
            <Link to="/" className={`nav__link${isActive('/') ? ' is-active' : ''}`}>
              Inicio
            </Link>

            <Link to="/profesores" className={`nav__link${isActive('/profesores') ? ' is-active' : ''}`}>
              Profesores
            </Link>

            <div className="nav__dropdown" onMouseLeave={closeDropdown}>
              <button
                type="button"
                onClick={() => setEduDropdownOpen(!eduDropdownOpen)}
                onMouseEnter={() => setEduDropdownOpen(true)}
                className={`nav__trigger${isEduActive ? ' is-active' : ''}`}
              >
                <span>Educación</span>
                <ChevronDown className="nav__caret" />
              </button>

              {eduDropdownOpen && (
                <div className="nav__panel" onMouseEnter={() => setEduDropdownOpen(true)}>
                  <Link to="/seminarios" onClick={closeDropdown} className="nav__item nav__item--feature">
                    <div className="nav__item-title">Seminarios &amp; Brochure</div>
                    <div className="nav__item-desc">Todos los programas y artículos de formación</div>
                  </Link>

                  <div className="nav__divider" />

                  <Link to="/catedra-exclusiva" onClick={closeDropdown} className="nav__item">
                    <div className="nav__item-title nav__item-title--compact">Cátedra Exclusiva</div>
                    <div className="nav__item-desc">Masterclass con el Dr. Antonio Piñero</div>
                  </Link>

                  <Link to="/cronicas" onClick={closeDropdown} className="nav__item--accent">
                    <div className="nav__cronica-title">
                      <span>&bull; Crónicas (Archivo de Cátedras)</span>
                      <Sparkles className="nav__spark" />
                    </div>
                    <div className="nav__item-desc">Dr. Roitman, Dr. Krüger, Dr. Piñero</div>
                  </Link>

                  <div className="nav__divider" />

                  <Link to="/panorama-biblico" onClick={closeDropdown} className="nav__item">
                    <div className="nav__item-title nav__item-title--compact">Panorama Bíblico</div>
                    <div className="nav__item-desc">Serie histórica y arqueológica completa</div>
                  </Link>

                  <Link to="/canones-biblicos" onClick={closeDropdown} className="nav__item">
                    <div className="nav__item-title nav__item-title--compact">Cánones Bíblicos</div>
                    <div className="nav__item-desc">Formación y códices bíblicos antiguos</div>
                  </Link>

                  <div className="nav__divider" />

                  <Link to="/sala-de-profesores" onClick={closeDropdown} className="nav__item">
                    <div className="nav__item-row">
                      <span className="nav__item-title nav__item-title--compact">Sala de Profesores</span>
                      <span className="nav__badge">Q&amp;A</span>
                    </div>
                    <div className="nav__item-desc">Recopilación de vídeos de preguntas y respuestas</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/cursos" className={`nav__link${isActive('/cursos') ? ' is-active' : ''}`}>
              Cursos
            </Link>

            <Link to="/comunidad" className={`nav__link${isActive('/comunidad') ? ' is-active' : ''}`}>
              Comunidad
            </Link>
          </nav>

          {/* Botón móvil */}
          <div className="nav-toggle-wrap">
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="nav-toggle">
              {mobileMenuOpen ? <X className="nav-toggle__icon" /> : <Menu className="nav-toggle__icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMobileMenu} className="mobile-menu__link">
            Inicio
          </Link>
          <Link to="/profesores" onClick={closeMobileMenu} className="mobile-menu__link">
            Profesores
          </Link>

          <div className="mobile-menu__label">Sección Educación</div>

          <Link to="/seminarios" onClick={closeMobileMenu} className="mobile-menu__link mobile-menu__link--sub">
            Seminarios &amp; Brochure
          </Link>
          <Link to="/catedra-exclusiva" onClick={closeMobileMenu} className="mobile-menu__link mobile-menu__link--sub">
            Cátedra Exclusiva
          </Link>
          <Link to="/cronicas" onClick={closeMobileMenu} className="mobile-menu__link--accent">
            &bull; Crónicas (Dr. Roitman, Dr. Krüger, Dr. Piñero)
          </Link>
          <Link to="/panorama-biblico" onClick={closeMobileMenu} className="mobile-menu__link mobile-menu__link--sub">
            Panorama Bíblico
          </Link>
          <Link to="/canones-biblicos" onClick={closeMobileMenu} className="mobile-menu__link mobile-menu__link--sub">
            Cánones Bíblicos
          </Link>
          <Link
            to="/sala-de-profesores"
            onClick={closeMobileMenu}
            className="mobile-menu__link mobile-menu__link--sub mobile-menu__link--split"
          >
            <span>Sala de Profesores (Q&amp;A)</span>
            <span className="mobile-menu__tag">Nuevo</span>
          </Link>

          <div className="mobile-menu__divider" />

          <Link to="/cursos" onClick={closeMobileMenu} className="mobile-menu__link">
            Cursos &amp; Seminarios
          </Link>
          <Link to="/comunidad" onClick={closeMobileMenu} className="mobile-menu__link">
            Comunidad
          </Link>

          <div className="mobile-menu__cta-wrap">
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__cta"
            >
              <YoutubeIcon className="icon icon--white" />
              <span>Visitar Canal de YouTube Oficial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
