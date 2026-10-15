import React, { useState } from 'react';
import { PlayCircle, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { YoutubeIcon } from '../../components/SocialIcons';

interface CronicaItem {
  id: string;
  speaker: string;
  title: string;
  isFree: boolean;
  image: string;
  youtubeId?: string;
  payuLink?: string;
  courseSlug?: string;
}

const cronicasList: CronicaItem[] = [
  {
    id: 'adolfo-roitman',
    speaker: 'Dr. Adolfo Roitman',
    title: 'El aporte de los manuscritos de Qumrán al estudio del texto Bíblico.',
    isFree: true,
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000146-568185681a/roitman-2.jpg?ph=23a7ea3ebd',
    youtubeId: '01gCkU8izz8',
  },
  {
    id: 'rene-kruger',
    speaker: 'Dr. Rene Krüger',
    title: 'Los Hijos de la Luz y los Hijos de las tinieblas en Qumrán',
    isFree: false,
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000148-5b6e95b6eb/Rene%20Kruger.jpg?ph=23a7ea3ebd',
    payuLink: 'https://biz.payulatam.com/L0d1b71280DDECE',
    courseSlug: 'catedra-exclusiva',
  },
  {
    id: 'antonio-pinero',
    speaker: 'Dr. Antonio Piñero',
    title: 'Jesús de Nazareth según los textos gnósticos',
    isFree: false,
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000147-072dd072df/Pi%C3%B1ero%20page.jpg?ph=23a7ea3ebd',
    payuLink: 'https://biz.payulatam.com/L0d1b71A1229BF5',
    courseSlug: 'catedra-exclusiva',
  },
];

export const CronicasPage: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-page text-ink-soft">
      
      {/* HERO BANNER DE CRÓNICAS */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden border-b border-line">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000073-ad8cead8d0/scrolls.jpg?ph=23a7ea3ebd')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />

        <div className="relative text-center px-4 z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-title-ancient">
            Archivo Histórico & Audiovisual
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink mt-2 drop-shadow-lg">
            Crónicas
          </h1>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* TEXTO EXACTO DE WEBNODE */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <blockquote className="font-serif italic text-lg sm:text-xl text-ink-soft leading-relaxed">
            "Crónicas corresponde al archivo de la sección de la Escuela de Alexandria denominada Cátedra Exclusiva. Presione la fotografía de la cátedra de su predilección para acceder a los medios de pago."
          </blockquote>
        </div>

        {/* MODAL / VISOR DE VIDEO ACTIVO */}
        {activeVideoId && (
          <div className="mb-16 p-6 rounded-2xl bg-surface border border-gold/60 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl font-bold text-ink flex items-center space-x-2">
                <PlayCircle className="w-5 h-5 text-gold" />
                <span>Reproduciendo Cátedra en Video</span>
              </h3>
              <button
                onClick={() => setActiveVideoId(null)}
                className="text-xs text-ink-muted hover:text-accent px-3 py-1 rounded bg-soft"
              >
                Cerrar video
              </button>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Cátedra Dr. Adolfo Roitman"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* REJILLA DE LAS 3 FOTOGRAFÍAS / CÁTEDRAS ORIGINALES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cronicasList.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-surface border border-line hover:border-gold transition-all duration-300 flex flex-col shadow-2xl group hover:-translate-y-1.5"
            >
              {/* Imagen con Sello Oficial de Alexandría */}
              <div className="relative aspect-[3/4] overflow-hidden bg-sunken">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badge Superior */}
                <div className="absolute top-3 right-3">
                  {item.isFree ? (
                    <span className="bg-accent border border-accent-dark text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      Gratis
                    </span>
                  ) : (
                    <span className="bg-surface/90 border border-gold/60 text-accent text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      Cátedra Magistral
                    </span>
                  )}
                </div>
              </div>

              {/* Textos y Acciones */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-surface to-sunken">
                <div>
                  <h2 className="font-serif text-lg font-bold text-ink group-hover:text-accent transition-colors leading-snug mb-2">
                    {item.title}
                  </h2>
                  <p className="font-serif text-base font-semibold text-gold">
                    {item.speaker}
                  </p>
                  {item.isFree && (
                    <span className="text-xs text-ink-muted font-medium block mt-1">
                      (Grabación abierta al público)
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-line">
                  {item.isFree ? (
                    <button
                      onClick={() => setActiveVideoId(item.youtubeId || null)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold to-gold-light hover:from-gold hover:to-gold-light text-ink font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Ver Cátedra Gratuita</span>
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <a
                        href={item.payuLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-gold hover:bg-gold-light text-ink font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 text-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Adquirir Grabación por PayU</span>
                      </a>
                      <a
                        href="/catedra-exclusiva"
                        className="w-full block py-2 px-3 rounded-xl bg-soft hover:bg-soft text-ink-soft text-xs font-semibold text-center border border-line-strong transition-colors"
                      >
                        Ver Detalles de la Cátedra
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INSTRUCCIONES DE ENVÍO DE COMPROBANTE ORIGINAL */}
        <div className="p-8 rounded-2xl bg-surface border border-line text-center space-y-4 max-w-3xl mx-auto shadow-xl">
          <p className="text-ink-soft text-sm font-semibold">
            Para las cátedras de pago, favor enviar el comprobante de pago al siguiente correo:{' '}
            <a href="mailto:escueladealexandria@gmail.com" className="text-accent hover:underline font-bold">
              escueladealexandria@gmail.com
            </a>
          </p>
          <p className="text-xs text-ink-muted">
            y recibirá el enlace con la grabación por el mismo medio.
          </p>
        </div>

        {/* DERECHOS DE AUTOR ORIGINAL */}
        <div className="mt-12 p-6 rounded-xl bg-sunken border border-line text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center space-x-2 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Propiedad Intelectual Protegida</span>
          </div>
          <p className="text-[11px] text-ink-muted leading-relaxed font-light">
            El presente material videográfico está protegido por derechos de autor y es propiedad exclusiva de sus respectivos autores-expositores. Queda prohibida su reproducción total o parcial sin la autorización expresa de los propietarios de los derechos de autor.
          </p>
          <div className="text-xs font-bold text-ink-soft pt-1 font-title-ancient">
            &reg; 2020-2021 ESCUELA DE ALEXANDRÍA
          </div>
        </div>

      </div>
    </div>
  );
};
