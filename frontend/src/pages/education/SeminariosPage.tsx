import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Maximize2, X, Download, ExternalLink } from 'lucide-react';

interface SeminarioArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  summary: string;
}

const seminariosData: SeminarioArticle[] = [
  {
    id: 'historia-cristianismo-primitivo',
    title: 'Historia del Cristianismo Primitivo',
    date: '17.06.2022',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000179-d4b90d4b91/%C2%B7_Jes%C3%BAs_Cristo_flanqueado_por_San_Pedro_y_San_Pablo_%C2%B7_Catacumbas_de_los_Santos_Pedro_y_Marcelino%2C_Roma%2C_s._IV_d._JC._%C2%B7.jpg?ph=23a7ea3ebd',
    summary: 'Seminario de introducción a los tres primeros siglos de la historia de las comunidades cristianas, desarrollado en torno al análisis de fuentes paleográficas y acontecimientos que marcaron estos siglos.'
  },
  {
    id: 'eclesiologia',
    title: 'Eclesiología',
    date: '25.02.2022',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000169-c6bd0c6bd1/iceberg.jpg?ph=23a7ea3ebd',
    summary: 'En el año 305 d.C., bajo el emperador Diocleciano, la religión cristiana estaba terminantemente prohibida. Examen profundo de las estructuras y doctrina eclesiológica de la iglesia primitiva.'
  },
  {
    id: 'cosmologia-biblica',
    title: 'Cosmología Bíblica',
    date: '22.11.2021',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000167-7f81d7f81e/197-3.jpeg?ph=23a7ea3ebd',
    summary: 'Comprender la cosmovisión de las culturas del Antiguo Cercano Oriente (Mesopotamia, Egipto, Canaán) conduce a una comprensión más fiel de cómo los Israelitas veían a Dios y al Universo.'
  },
  {
    id: 'metodos-de-estudio',
    title: 'Métodos de estudio e investigación Bíblica',
    date: '22.11.2021',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000166-6595565956/Bible-study-man-hand-main.jpg?ph=23a7ea3ebd',
    summary: 'Desde herramientas para un estudio bíblico metódico, comprensión lectora y análisis denotado, hasta métodos avanzados de exégesis filológica del texto bíblico.'
  },
  {
    id: 'origen-del-mal',
    title: 'El origen del mal en la Biblia Hebrea',
    date: '18.06.2021',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000156-e159ae159c/fx-grayscale-dark_200000153.jpg?ph=23a7ea3ebd',
    summary: 'Exploración de la problemática del mal en la biblia hebrea: su origen ontológico en el hombre, el desarrollo demonológico y la soberanía de YHVH frente a las teologías del Cercano Oriente.'
  },
  {
    id: 'modelos-mesianicos',
    title: 'Modelos Mesiánicos',
    date: '13.01.2021',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000018-917f7917f9/WhatsApp%20Image%202020-03-27%20at%205.09.58%20PM.jpeg?ph=23a7ea3ebd',
    summary: 'La figura del Mesías en el judaísmo del Segundo Templo: rey davídico, sacerdote de Melquisedec, siervo sufriente y el Hijo del Hombre celestial.'
  },
  {
    id: 'critica-textual-seminario',
    title: 'Crítica Textual Bíblica',
    date: 'Archivo',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000144-3cd293cd2b/scrolls-1.jpg?ph=23a7ea3ebd',
    summary: 'Metodología comparativa de variantes en papiros (P46, P66, P75) y códices unciales para reconstruir con rigor científico el texto original del Nuevo y Antiguo Testamento.'
  }
];

export const SeminariosPage: React.FC = () => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const brochureImageSrc = '/images/malla-curricular-2026-2027.jpg';

  return (
    <div className="min-h-screen bg-page text-ink-soft">
      
      {/* HERO BANNER */}
      <section className="relative h-60 sm:h-72 flex items-center justify-center overflow-hidden border-b border-line">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000106-5efe35efe6/IMG-20200517-WA0008.jpg?ph=23a7ea3ebd')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-transparent" />

        <div className="relative text-center px-4 z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-title-ancient">
            Programas Académicos & Cátedras
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink mt-2 drop-shadow-lg">
            Educación & Seminarios
          </h1>
          <p className="text-xs sm:text-sm text-ink-muted mt-2 max-w-xl mx-auto font-light">
            Malla curricular oficial de la Escuela de Alexandría y archivo histórico de seminarios impartidos.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* SECCIÓN 1 (ARRIBA): BROCHURE & MALLA CURRICULAR */}
        <section aria-labelledby="brochure-title" className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold block">
                Folleto Informativo Oficial
              </span>
              <h2 id="brochure-title" className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mt-1">
                Brochure & Malla Curricular
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                Oferta Académica 2026 - 2027 &bull; Escuela de Alexandría
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-surface border border-line hover:border-gold/60 text-xs font-semibold text-ink transition-all shadow-sm"
              >
                <Maximize2 className="w-3.5 h-3.5 text-gold" />
                <span>Ampliar Malla</span>
              </button>
              <a
                href={brochureImageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-soft hover:bg-gold/20 text-xs font-semibold text-accent transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Ver Original</span>
              </a>
            </div>
          </div>

          {/* Tarjeta con la imagen de la Malla Curricular */}
          <div className="p-3 sm:p-5 rounded-2xl bg-surface border border-line shadow-2xl overflow-hidden group">
            <div 
              onClick={() => setIsZoomOpen(true)}
              className="relative rounded-xl overflow-hidden border border-line cursor-zoom-in bg-sunken"
              title="Haz clic para ver en pantalla completa"
            >
              <img
                src={brochureImageSrc}
                alt="Malla Curricular - Escuela de Alexandría - Oferta Académica 2026 - 2027"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-surface/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-ink shadow-lg border border-line flex items-center space-x-2">
                  <Maximize2 className="w-3.5 h-3.5 text-gold" />
                  <span>Clic para ampliar</span>
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-soft">
              <p className="font-light leading-relaxed">
                Nuestra formación integral comprende las áreas de <strong className="text-ink font-semibold">Divinidad</strong>, <strong className="text-ink font-semibold">Filología</strong>, <strong className="text-ink font-semibold">Eclesiología</strong>, <strong className="text-ink font-semibold">Historia</strong> y <strong className="text-ink font-semibold">Lenguas Bíblicas</strong> (Griego Helenístico, Hebreo Bíblico, Arameo y Siríaco).
              </p>
              <a
                href={brochureImageSrc}
                download="Malla-Curricular-Escuela-Alexandria-2026-2027.jpg"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-line text-[11px] font-medium text-ink-soft hover:text-ink hover:border-gold whitespace-nowrap transition-colors"
              >
                <Download className="w-3 h-3 text-gold" />
                <span>Descargar imagen</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2 (ABAJO): SEMINARIOS DICTADOS */}
        <section aria-labelledby="seminarios-title" className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold block">
              Cátedras y Archivo Editorial
            </span>
            <h2 id="seminarios-title" className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mt-1">
              Seminarios Dictados
            </h2>
            <p className="text-xs text-ink-muted mt-1">
              Registro de seminarios y módulos impartidos por los docentes de la Escuela de Alexandría.
            </p>
          </div>

          <div className="space-y-5">
            {seminariosData.map((item) => (
              <article
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-surface border border-line hover:border-gold/60 transition-all shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-6 items-start sm:items-center group"
              >
                <div className="w-full sm:w-48 sm:h-36 h-48 rounded-xl overflow-hidden bg-sunken border border-line flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] text-gold font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-soft font-light leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/cursos"
                      className="inline-flex items-center space-x-1.5 text-xs text-accent hover:underline font-semibold"
                    >
                      <span>Ver lecciones y temario</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* MODAL / LIGHTBOX PARA VER EL BROCHURE EN DETALLE */}
      {isZoomOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Ampliación Malla Curricular"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center bg-surface rounded-2xl border border-line p-2 sm:p-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-line text-xs">
              <span className="font-serif font-bold text-ink sm:text-sm">
                Malla Curricular &bull; Oferta Académica 2026 - 2027
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={brochureImageSrc}
                  download="Malla-Curricular-Escuela-Alexandria-2026-2027.jpg"
                  className="p-1.5 rounded-lg hover:bg-soft text-ink-soft hover:text-ink transition-colors"
                  title="Descargar"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-soft text-ink-soft hover:text-ink transition-colors"
                  title="Cerrar (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="w-full flex-1 overflow-auto p-2 flex items-center justify-center">
              <img
                src={brochureImageSrc}
                alt="Malla Curricular en detalle"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

