import React, { useState } from 'react';
import { PlayCircle, BookOpen, MapPin, Compass } from 'lucide-react';

interface PanoramaVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
}

const panoramaVideos: PanoramaVideo[] = [
  {
    id: 'ep1',
    youtubeId: 'Ak3FMCxm-FE',
    title: 'Sesión 1: Geografía y Arqueología del Antiguo Cercano Oriente',
    description: 'Exploración geográfica de Canaán, rutas del comercio antiguo y excavaciones arqueológicas en el Creciente Fértil.'
  },
  {
    id: 'ep2',
    youtubeId: 'zsJ78SrwSJw',
    title: 'Sesión 2: El Período Patriarcal y Contexto Bronce Tardío',
    description: 'Análisis textual de los relatos patriarcales a la luz de las tablillas de Mari, Nuzi y los archivos de Ugarit.'
  },
  {
    id: 'ep3',
    youtubeId: 'SfBfqxHpG7g',
    title: 'Sesión 3: El Éxodo, la Conquista y la Era de los Jueces',
    description: 'Modelos históricos de asentamiento en Canaán, la estela de Merneptah y las confederaciones tribales.'
  },
  {
    id: 'ep4',
    youtubeId: 'Fc4HQXAmCMQ',
    title: 'Sesión 4: La Monarquía Unida y Dividida: Israel y Judá',
    description: 'Arqueología de Jerusalén, las inscripciones de Tel Dan, Mesa y los anales asirios sobre los reyes de Samaria.'
  },
  {
    id: 'ep5',
    youtubeId: '-Kej3z6jO-A',
    title: 'Sesión 5: El Exilio Babilónico y la Crisis Textual',
    description: 'La caída de Jerusalén en 586 a.C., la cautividad en Mesopotamia y el surgimiento del judaísmo del Segundo Templo.'
  },
  {
    id: 'ep6',
    youtubeId: 'hyoS7NcyQcU',
    title: 'Sesión 6: El Período Persa y la Reconstrucción',
    description: 'El cilindro de Ciro, el liderazgo de Esdras y Nehemías y la redacción final de las tradiciones sacerdotales.'
  },
  {
    id: 'ep7',
    youtubeId: '5EQUGg2GoCM',
    title: 'Sesión 7: El Helenismo, Alejandro Magno y los Ptolomeos',
    description: 'La traducción de la Septuaginta (LXX) en Alejandría y la crisis macabea frente al imperio seléucida.'
  },
  {
    id: 'ep8',
    youtubeId: '3yIKwPpBf78',
    title: 'Sesión 8: El Mundo Romano y el Surgimiento del Cristianismo',
    description: 'Herodes el Grande, las provincias romanas de Judea y Galilea, y el trasfondo social de los primeros discípulos.'
  }
];

export const PanoramaBiblicoPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<PanoramaVideo>(panoramaVideos[0]);

  return (
    <div className="min-h-screen bg-page text-ink-soft">
      
      {/* HERO BANNER */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden border-b border-line">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000149-1ea391ea3b/WEB3-Judean-Desert-MOUNTAINS-shutterstock_1152166163.jpg?ph=23a7ea3ebd')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />

        <div className="relative text-center px-4 z-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold font-title-ancient">
            Ciclo de Formación Histórica
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink mt-2 drop-shadow-lg">
            Panorama Bíblico
          </h1>
        </div>
      </section>

      {/* REPRODUCTOR Y LISTA DE VIDEOS */}
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
                  Sesión Académica
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

          {/* Columna Derecha: Temario de Episodios (1/3) */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-surface border border-line shadow-xl">
              <h3 className="font-serif text-xl font-bold text-ink mb-4 flex items-center space-x-2">
                <Compass className="w-5 h-5 text-gold" />
                <span>Episodios de la Serie</span>
              </h3>

              <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                {panoramaVideos.map((video, idx) => {
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
                          Parte {idx + 1}
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
