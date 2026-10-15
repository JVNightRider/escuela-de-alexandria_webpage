import React, { useState } from 'react';
import { PlayCircle, BookOpen, Layers, Scroll } from 'lucide-react';

interface CanonVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
}

const canonesVideos: CanonVideo[] = [
  {
    id: 'canon-1',
    youtubeId: 'QvAVSCYGmq4',
    title: 'Cánones Bíblicos - Parte I: Definición y Origen del Canon',
    description: 'Análisis filológico del término griego "kanon" y el desarrollo de listas autoritativas en el judaísmo y el cristianismo temprano.'
  },
  {
    id: 'canon-2',
    youtubeId: 'KL5a90uixrE',
    title: 'Cánones Bíblicos - Parte II: El Tanaj, la Septuaginta y Qumrán',
    description: 'La diversidad textual en los rollos del Mar Muerto y los criterios de canonicidad rabínicos en Jamnia / Yavne.'
  },
  {
    id: 'canon-3',
    youtubeId: 'CVBe_1-6w8Y',
    title: 'Cánones Bíblicos - Parte III: El Canon del Nuevo Testamento',
    description: 'El Fragmento Muratoriano, Marción, Eusebio de Cesarea y la carta festal de Atanasio de Alejandría del año 367 d.C.'
  },
  {
    id: 'canon-4',
    youtubeId: 'c3i1Mkaei-E',
    title: 'Cánones Bíblicos - Parte IV: Concilios y Grandes Códices Unciales',
    description: 'El Códice Sinaítico, Vaticano y Alejandrino; los concilios de Hipona y Cartago y la fijación definitiva de los cánones occidentales y orientales.'
  }
];

export const CanonesBiblicosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<CanonVideo>(canonesVideos[0]);

  return (
    <div className="min-h-screen bg-page text-ink-soft">
      
      {/* HERO BANNER */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden border-b border-line">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000165-a4325a4326/RabulaGospelsFolio04vCanonTable.jpg?ph=23a7ea3ebd')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />

        <div className="relative text-center px-4 z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-title-ancient">
            Investigación Textual & Manuscritos
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink mt-2 drop-shadow-lg">
            Cánones Bíblicos
          </h1>
        </div>
      </section>

      {/* CONTENIDO Y VIDEOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Reproductor Principal (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-surface border border-line shadow-2xl p-6 space-y-6">
              
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-line shadow-inner">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Conferencia Especializada
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink mt-1 mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-light bg-sunken p-4 rounded-xl border border-line">
                  {selectedVideo.description}
                </p>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Temario de Videos (1/3) */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-surface border border-line shadow-xl">
              <h3 className="font-serif text-xl font-bold text-ink mb-4 flex items-center space-x-2">
                <Layers className="w-5 h-5 text-gold" />
                <span>Módulos de la Cátedra</span>
              </h3>

              <div className="space-y-2.5">
                {canonesVideos.map((video, idx) => {
                  const isSelected = selectedVideo.id === video.id;

                  return (
                    <button
                      key={video.id}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 ${
                        isSelected
                          ? 'bg-soft border-gold shadow-md'
                          : 'bg-parchment border-line hover:border-line-strong text-ink-soft'
                      }`}
                    >
                      <PlayCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-accent' : 'text-ink-muted'}`} />
                      <div>
                        <span className="text-[10px] font-semibold text-gold uppercase tracking-wider block">
                          Módulo {idx + 1}
                        </span>
                        <p className={`text-xs font-medium leading-snug mt-0.5 ${isSelected ? 'text-ink' : 'text-ink-soft'}`}>
                          {video.title}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
