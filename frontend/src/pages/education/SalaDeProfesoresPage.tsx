import React, { useState, useEffect, useMemo } from 'react';
import {
  Play,
  RotateCcw,
  Search,
  ExternalLink,
  Sparkles,
  HelpCircle,
  Video,
  Clock,
  Radio,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { YoutubeIcon } from '../../components/SocialIcons';
import {
  SalaProfesorVideo,
  PLAYLIST_ID,
  PLAYLIST_URL
} from '../../data/salaProfesoresVideos';
import {
  getSalaProfesoresVideos,
  PlaylistSyncResult
} from '../../services/youtubePlaylistService';

export const SalaDeProfesoresPage: React.FC = () => {
  const [syncData, setSyncData] = useState<PlaylistSyncResult>({
    videos: [],
    isLive: false,
    source: 'fallback',
    totalCount: 0
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'qna' | 'masterclass'>('all');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc'); // Most recent first by default
  const [selectedVideo, setSelectedVideo] = useState<SalaProfesorVideo | null>(null);

  // Load videos on mount
  useEffect(() => {
    let isMounted = true;
    getSalaProfesoresVideos()
      .then((res) => {
        if (isMounted) {
          setSyncData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching playlist:', err);
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter & Sort
  const filteredVideos = useMemo(() => {
    let result = [...syncData.videos];

    // Filter by search
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          (v.summary && v.summary.toLowerCase().includes(q)) ||
          (v.episodeNumber && v.episodeNumber.includes(q))
      );
    }

    // Filter by type
    if (filterType === 'qna') {
      result = result.filter((v) => v.isQandA);
    } else if (filterType === 'masterclass') {
      result = result.filter((v) => !v.isQandA);
    }

    // Sort order
    result.sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.index - a.index;
      }
      return a.index - b.index;
    });

    return result;
  }, [syncData.videos, searchTerm, filterType, sortOrder]);

  const handleSelectVideo = (video: SalaProfesorVideo) => {
    setSelectedVideo(video);
    // Smooth scroll to player
    const playerEl = document.getElementById('sala-player-section');
    if (playerEl) {
      playerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetToPlaylist = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-page text-ink-soft">
      {/* HERO BANNER */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000073-ad8cead8d0/scrolls.jpg?ph=23a7ea3ebd')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-page/75 to-transparent" />

        <div className="relative text-center px-4 z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface/90 border border-gold/40 text-xs font-semibold text-gold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="uppercase tracking-widest font-title-ancient">Educación & Cátedras en Vivo</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ink drop-shadow-md">
            Sala de Profesores
          </h1>

          <p className="text-xs sm:text-base text-ink-soft mt-3 max-w-2xl mx-auto font-light leading-relaxed">
            Recopilación de los vídeos enfocados en preguntas y respuestas de nuestros asistentes.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-surface border border-line text-ink-soft">
              <Radio className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Lista Oficial de Reproducción YouTube</span>
            </span>
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>Abrir en YouTube ({syncData.totalCount || 29} videos)</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* SECCIÓN DEL REPRODUCTOR (DINÁMICO: LISTA COMPLETA O VIDEO ESPECÍFICO) */}
        <section
          id="sala-player-section"
          aria-labelledby="player-heading"
          className="p-4 sm:p-6 rounded-2xl bg-surface border border-line shadow-2xl space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gold font-bold block">
                  {selectedVideo ? 'Reproduciendo Sesión Individual' : 'Reproductor Oficial de la Playlist'}
                </span>
                <h2 id="player-heading" className="font-serif text-lg sm:text-xl font-bold text-ink leading-tight">
                  {selectedVideo ? selectedVideo.title : 'Lista de Reproducción Completa — Sala de Profesores'}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {selectedVideo && (
                <button
                  type="button"
                  onClick={handleResetToPlaylist}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-soft hover:bg-gold/20 text-xs font-semibold text-accent transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ver Playlist Completa</span>
                </button>
              )}
              <a
                href={selectedVideo ? `https://www.youtube.com/watch?v=${selectedVideo.id}&list=${PLAYLIST_ID}` : PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-line text-xs font-medium text-ink-soft hover:text-ink hover:border-gold transition-colors"
              >
                <YoutubeIcon className="w-3.5 h-3.5 text-accent" />
                <span>Ver en YouTube</span>
              </a>
            </div>
          </div>

          {/* IFRAME RESPONSIVE */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner border border-line">
            {selectedVideo ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}`}
                title="Lista Oficial Sala de Profesores - Escuela de Alexandría"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {selectedVideo && selectedVideo.summary && (
            <div className="p-3.5 rounded-xl bg-sunken border border-line/60 text-xs text-ink-soft flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-ink font-semibold">Resumen de la sesión: </strong>
                {selectedVideo.summary}
              </p>
            </div>
          )}
        </section>

        {/* BARRA DE FILTROS Y BÚSQUEDA */}
        <section aria-label="Buscador y filtros" className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Buscador */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por tema, pregunta, sectas, canon, qumrán..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-line focus:border-gold focus:outline-none text-xs sm:text-sm text-ink placeholder-ink-muted shadow-inner transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-muted hover:text-ink"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Píldoras de filtro */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filterType === 'all'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-surface border border-line text-ink-soft hover:bg-soft'
                }`}
              >
                Todos ({syncData.videos.length || 29})
              </button>

              <button
                type="button"
                onClick={() => setFilterType('qna')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all inline-flex items-center space-x-1.5 ${
                  filterType === 'qna'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-surface border border-line text-ink-soft hover:bg-soft'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Tiempo de Preguntas ({syncData.videos.filter((v) => v.isQandA).length || 13})</span>
              </button>

              <button
                type="button"
                onClick={() => setFilterType('masterclass')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all inline-flex items-center space-x-1.5 ${
                  filterType === 'masterclass'
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-surface border border-line text-ink-soft hover:bg-soft'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Exposiciones ({syncData.videos.filter((v) => !v.isQandA).length || 16})</span>
              </button>

              {/* Orden */}
              <button
                type="button"
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                title="Cambiar orden"
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-surface border border-line text-ink-soft hover:text-ink hover:border-gold transition-colors inline-flex items-center space-x-1.5 ml-auto md:ml-0"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
                <span>{sortOrder === 'desc' ? 'Más recientes' : 'Cronológico'}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-ink-muted px-1">
            <span>
              Mostrando <strong className="text-ink font-semibold">{filteredVideos.length}</strong> de {syncData.videos.length || 29} sesiones
            </span>
            <span className="hidden sm:inline">
              Haz clic en cualquier video para reproducirlo inmediatamente
            </span>
          </div>
        </section>

        {/* GRILLA DE VIDEOS ESTILO EDITORIAL */}
        {loading ? (
          <div className="text-center py-24 text-ink-muted space-y-3">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm">Cargando catálogo audiovisual de Sala de Profesores...</p>
          </div>
        ) : filteredVideos.length === 0 ? (
          <div className="text-center py-20 bg-surface rounded-2xl border border-line p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-gold mx-auto opacity-70" />
            <h3 className="font-serif text-lg font-bold text-ink">No se encontraron sesiones</h3>
            <p className="text-xs text-ink-muted max-w-md mx-auto">
              No hay videos que coincidan con los términos de búsqueda. Intenta con otra palabra clave como "sectas", "canon", "ciencias" o "mitos".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-soft text-accent text-xs font-semibold hover:bg-gold/20"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              const isCurrentlyPlaying = selectedVideo?.id === video.id;

              return (
                <article
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={`group rounded-2xl bg-surface border transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col overflow-hidden cursor-pointer ${
                    isCurrentlyPlaying
                      ? 'border-gold ring-2 ring-gold/40 shadow-gold/10'
                      : 'border-line hover:border-gold/60'
                  }`}
                >
                  {/* Miniatura del video */}
                  <div className="relative aspect-video w-full overflow-hidden bg-sunken">
                    <img
                      src={video.thumb}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay al pasar el ratón */}
                    <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Badge de Duración */}
                    {video.duration && (
                      <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[11px] font-semibold text-white flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-gold" />
                        <span>{video.duration}</span>
                      </span>
                    )}

                    {/* Badge de Tipo: Preguntas o Masterclass */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      {video.episodeNumber && (
                        <span className="px-2 py-0.5 rounded-md bg-page/90 backdrop-blur-sm border border-line text-[10px] font-bold text-ink">
                          Ep. {video.episodeNumber}
                        </span>
                      )}
                      {video.isQandA ? (
                        <span className="px-2 py-0.5 rounded-md bg-accent/90 text-white text-[10px] font-bold shadow-sm flex items-center space-x-1">
                          <HelpCircle className="w-3 h-3" />
                          <span>Q&A</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-gold/90 text-ink text-[10px] font-bold shadow-sm">
                          Cátedra
                        </span>
                      )}
                    </div>

                    {isCurrentlyPlaying && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-accent text-white text-[10px] font-bold shadow-md animate-pulse">
                        Reproduciendo ahora
                      </div>
                    )}
                  </div>

                  {/* Información del video */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-ink group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {video.title}
                      </h3>

                      {video.summary && (
                        <p className="text-xs text-ink-muted font-light line-clamp-2 leading-relaxed">
                          {video.summary}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center space-x-1 text-accent font-semibold group-hover:underline">
                        <span>{isCurrentlyPlaying ? 'En reproducción' : 'Reproducir sesión'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>

                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Ver directamente en YouTube"
                        className="text-ink-muted hover:text-accent p-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* NOTA DE ACTUALIZACIÓN DINÁMICA */}
        <section className="p-6 rounded-2xl bg-sunken border border-line shadow-sm space-y-3 text-xs text-ink-soft">
          <div className="flex items-center space-x-2 text-gold font-bold">
            <Radio className="w-4 h-4 text-accent" />
            <span className="uppercase tracking-wider">Conexión Dinámica con YouTube</span>
          </div>
          <p className="font-light leading-relaxed">
            Esta sección está enlazada directamente con la lista de reproducción oficial de la Escuela de Alexandría (<strong className="text-ink font-semibold">ID: {PLAYLIST_ID}</strong>). El reproductor principal reproduce la lista completa en vivo directamente desde los servidores de YouTube, por lo que cualquier nuevo video que los docentes publiquen se incorporará automáticamente a la secuencia.
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 font-semibold text-accent hover:underline"
            >
              <span>Acceder a la lista completa en YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-ink-muted">&bull;</span>
            <a
              href="https://www.youtube.com/channel/UCZZwgfDZOWO4tlEAXUuVtQA?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 font-semibold text-ink-soft hover:text-ink"
            >
              <span>Suscribirse al canal oficial</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
