import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { Logo } from './Logo';

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

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-line text-ink-soft transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo oficial */}
          <Link to="/" aria-label="Escuela de Alexandría - Inicio">
            <Logo />
          </Link>


          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'text-accent bg-soft' : 'text-ink-soft hover:text-accent hover:bg-soft'
                }`}
            >
              Inicio
            </Link>

            <Link
              to="/profesores"
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/profesores') ? 'text-accent bg-soft' : 'text-ink-soft hover:text-accent hover:bg-soft'
                }`}
            >
              Profesores
            </Link>

            {/* Dropdown Educación con submenús exactos */}
            <div className="relative" onMouseLeave={() => setEduDropdownOpen(false)}>
              <button
                onClick={() => setEduDropdownOpen(!eduDropdownOpen)}
                onMouseEnter={() => setEduDropdownOpen(true)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${isEduActive ? 'text-accent bg-soft' : 'text-ink-soft hover:text-accent hover:bg-soft'
                  }`}
              >
                <span>Educación</span>
                <ChevronDown className="w-4 h-4 ml-0.5 opacity-80" />
              </button>

              {eduDropdownOpen && (
                <div
                  className="absolute left-0 mt-1 w-72 rounded-xl bg-surface border border-line shadow-2xl py-2 z-50 animate-fadeIn"
                  onMouseEnter={() => setEduDropdownOpen(true)}
                >
                  <Link
                    to="/seminarios"
                    onClick={() => setEduDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs text-ink-soft hover:bg-soft hover:text-accent transition-colors"
                  >
                    <div className="font-semibold text-sm">Seminarios & Brochure</div>
                    <div className="text-[11px] text-ink-muted">Todos los programas y artículos de formación</div>
                  </Link>

                  <div className="border-t border-line my-1"></div>

                  <Link
                    to="/catedra-exclusiva"
                    onClick={() => setEduDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-ink-soft hover:bg-soft hover:text-accent transition-colors"
                  >
                    <div className="font-semibold text-xs">Cátedra Exclusiva</div>
                    <div className="text-[11px] text-ink-muted">Masterclass con el Dr. Antonio Piñero</div>
                  </Link>

                  {/* Submenú Crónicas */}
                  <Link
                    to="/cronicas"
                    onClick={() => setEduDropdownOpen(false)}
                    className="block pl-7 pr-4 py-1.5 text-xs text-accent hover:bg-soft transition-colors"
                  >
                    <div className="font-bold text-xs flex items-center space-x-1">
                      <span>&bull; Crónicas (Archivo de Cátedras)</span>
                      <Sparkles className="w-3 h-3 text-gold" />
                    </div>
                    <div className="text-[10px] text-ink-muted">Dr. Roitman, Dr. Krüger, Dr. Piñero</div>
                  </Link>

                  <div className="border-t border-line my-1"></div>

                  <Link
                    to="/panorama-biblico"
                    onClick={() => setEduDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-ink-soft hover:bg-soft hover:text-accent"
                  >
                    <div className="font-semibold text-xs">Panorama Bíblico</div>
                    <div className="text-[11px] text-ink-muted">Serie histórica y arqueológica completa</div>
                  </Link>

                  <Link
                    to="/canones-biblicos"
                    onClick={() => setEduDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-ink-soft hover:bg-soft hover:text-accent"
                  >
                    <div className="font-semibold text-xs">Cánones Bíblicos</div>
                    <div className="text-[11px] text-ink-muted">Formación y códices bíblicos antiguos</div>
                  </Link>

                  <div className="border-t border-line my-1"></div>

                  <Link
                    to="/sala-de-profesores"
                    onClick={() => setEduDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-ink-soft hover:bg-soft hover:text-accent"
                  >
                    <div className="font-semibold text-xs flex items-center justify-between">
                      <span>Sala de Profesores</span>
                      <span className="text-[10px] bg-accent/15 text-accent px-1.5 py-0.5 rounded font-bold">Q&A</span>
                    </div>
                    <div className="text-[11px] text-ink-muted">Recopilación de vídeos de preguntas y respuestas</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/cursos"
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/cursos') ? 'text-accent bg-soft' : 'text-ink-soft hover:text-accent hover:bg-soft'
                }`}
            >
              Cursos
            </Link>

            <Link
              to="/comunidad"
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/comunidad') ? 'text-accent bg-soft' : 'text-ink-soft hover:text-accent hover:bg-soft'
                }`}
            >
              Comunidad
            </Link>
          </nav>

          {/* Botón Móvil */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-soft hover:text-accent hover:bg-soft transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-surface px-4 pt-3 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink-soft hover:bg-soft"
          >
            Inicio
          </Link>
          <Link
            to="/profesores"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink-soft hover:bg-soft"
          >
            Profesores
          </Link>

          <div className="px-3 pt-2 text-xs font-bold text-gold uppercase tracking-wider">
            Sección Educación
          </div>
          <Link
            to="/seminarios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 rounded-md text-sm text-ink-soft hover:bg-soft"
          >
            Seminarios & Brochure
          </Link>
          <Link
            to="/catedra-exclusiva"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 rounded-md text-sm text-ink-soft hover:bg-soft"
          >
            Cátedra Exclusiva
          </Link>
          <Link
            to="/cronicas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-2 rounded-md text-sm font-bold text-accent hover:bg-soft"
          >
            &bull; Crónicas (Dr. Roitman, Dr. Krüger, Dr. Piñero)
          </Link>
          <Link
            to="/panorama-biblico"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 rounded-md text-sm text-ink-soft hover:bg-soft"
          >
            Panorama Bíblico
          </Link>
          <Link
            to="/canones-biblicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 rounded-md text-sm text-ink-soft hover:bg-soft"
          >
            Cánones Bíblicos
          </Link>
          <Link
            to="/sala-de-profesores"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 rounded-md text-sm text-ink-soft hover:bg-soft flex items-center justify-between"
          >
            <span>Sala de Profesores (Q&A)</span>
            <span className="text-[10px] bg-accent/15 text-accent px-1.5 py-0.5 rounded font-bold">Nuevo</span>
          </Link>

          <div className="border-t border-line pt-2"></div>
          <Link
            to="/cursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink-soft hover:bg-soft"
          >
            Cursos & Seminarios
          </Link>
          <Link
            to="/comunidad"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-ink-soft hover:bg-soft"
          >
            Comunidad
          </Link>

          <div className="pt-4">
            <a
              href="https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold text-xs shadow-md"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Visitar Canal de YouTube Oficial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
