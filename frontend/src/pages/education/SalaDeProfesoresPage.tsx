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
import { PageMeta } from '../../components/PageMeta';
import { BackdropImage } from '../../components/BackdropImage';
import {
  SalaProfesorVideo,
  PLAYLIST_ID,
  PLAYLIST_URL,
  fallbackSalaProfesoresVideos
} from '../../data/salaProfesoresVideos';
import {
  getSalaProfesoresVideos,
  PlaylistSyncResult
} from '../../services/youtubePlaylistService';
import { SITE } from '../../data/site';

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
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [selectedVideo, setSelectedVideo] = useState<SalaProfesorVideo | null>(null);

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

  /** Conteos derivados del dataset activo (API, caché o respaldo local). */
  const allVideos = syncData.videos.length ? syncData.videos : fallbackSalaProfesoresVideos;
  const totalVideos = allVideos.length;
  const qnaCount = allVideos.filter((v) => v.isQandA).length;
  const masterclassCount = totalVideos - qnaCount;

  const filteredVideos = useMemo(() => {
    let result = [...syncData.videos];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          (v.summary && v.summary.toLowerCase().includes(q)) ||
          (v.episodeNumber && v.episodeNumber.includes(q))
      );
    }

    if (filterType === 'qna') {
      result = result.filter((v) => v.isQandA);
    } else if (filterType === 'masterclass') {
      result = result.filter((v) => !v.isQandA);
    }

    result.sort((a, b) => (sortOrder === 'desc' ? b.index - a.index : a.index - b.index));

    return result;
  }, [syncData.videos, searchTerm, filterType, sortOrder]);

  const handleSelectVideo = (video: SalaProfesorVideo) => {
    setSelectedVideo(video);
    const playerEl = document.getElementById('sala-player-section');
    if (playerEl) {
      playerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetToPlaylist = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="page">

      <PageMeta
        title="Sala de Profesores (Q&A)"
        description="Veintinueve sesiones en video de preguntas y respuestas con los docentes de la Escuela de Alexandría: sectas, canon, Qumrán, crítica textual y textos gnósticos."
        path="/sala-de-profesores"
      />

      {/* HERO */}
      <section className="page-hero page-hero--tall">
        <BackdropImage src="/images/hero-manuscritos.jpg" className="backdrop sala__hero-bg" />
        <div className="page-hero__overlay page-hero__overlay--light" />

        <div className="sala__hero-inner">
          <div className="sala__hero-tag">
            <Sparkles className="icon icon--tiny icon--gold" />
            <span className="sala__hero-tag-text">Educación &amp; Cátedras en Vivo</span>
          </div>

          <h1 className="sala__hero-title">Sala de Profesores</h1>

          <p className="sala__hero-text">
            Recopilación de los vídeos enfocados en preguntas y respuestas de nuestros asistentes.
          </p>

          <div className="sala__hero-meta">
            <span className="sala__hero-live">
              <Radio className="icon icon--tiny icon--accent sala__hero-live-icon" />
              <span>Lista Oficial de Reproducción YouTube</span>
            </span>
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sala__hero-link"
            >
              <YoutubeIcon className="icon icon--tiny" />
              <span>Abrir en YouTube ({totalVideos} videos)</span>
              <ExternalLink className="icon icon--xs" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="sala__body">

        {/* Reproductor */}
        <section
          id="sala-player-section"
          aria-labelledby="player-heading"
          className="sala__player"
        >
          <div className="sala__player-head">
            <div className="sala__player-id">
              <div className="sala__player-icon">
                <Play className="sala__player-icon-svg" />
              </div>
              <div>
                <span className="sala__player-label">
                  {selectedVideo ? 'Reproduciendo Sesión Individual' : 'Reproductor Oficial de la Playlist'}
                </span>
                <h2 id="player-heading" className="sala__player-title">
                  {selectedVideo ? selectedVideo.title : 'Lista de Reproducción Completa — Sala de Profesores'}
                </h2>
              </div>
            </div>

            <div className="sala__player-actions">
              {selectedVideo && (
                <button type="button" onClick={handleResetToPlaylist} className="sala__reset">
                  <RotateCcw className="icon icon--tiny" />
                  <span>Ver Playlist Completa</span>
                </button>
              )}
              <a
                href={selectedVideo ? `https://www.youtube.com/watch?v=${selectedVideo.id}&list=${PLAYLIST_ID}` : PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sala__external"
              >
                <YoutubeIcon className="icon icon--tiny icon--accent" />
                <span>Ver en YouTube</span>
              </a>
            </div>
          </div>

          <div className="video-frame">
            {selectedVideo ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}`}
                title="Lista Oficial Sala de Profesores - Escuela de Alexandría"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {selectedVideo && selectedVideo.summary && (
            <div className="sala__summary">
              <CheckCircle2 className="sala__summary-icon" />
              <p>
                <strong>Resumen de la sesión: </strong>
                {selectedVideo.summary}
              </p>
            </div>
          )}
        </section>

        {/* Filtros */}
        <section aria-label="Buscador y filtros" className="sala__filters">
          <div className="sala__filter-row">
            <div className="sala__search">
              <div className="search">
                <Search className="search__icon" />
                <input
                  type="text"
                  placeholder="Buscar por tema, pregunta, sectas, canon, qumrán..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search__input"
                />
                {searchTerm && (
                  <button type="button" onClick={() => setSearchTerm('')} className="search__clear">
                    Limpiar
                  </button>
                )}
              </div>
            </div>

            <div className="sala__chips">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={filterType === 'all' ? 'chip is-active' : 'chip'}
              >
                Todos ({totalVideos})
              </button>

              <button
                type="button"
                onClick={() => setFilterType('qna')}
                className={filterType === 'qna' ? 'chip is-active' : 'chip'}
              >
                <HelpCircle className="icon icon--tiny" />
                <span>Tiempo de Preguntas ({qnaCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setFilterType('masterclass')}
                className={filterType === 'masterclass' ? 'chip is-active' : 'chip'}
              >
                <Video className="icon icon--tiny" />
                <span>Exposiciones ({masterclassCount})</span>
              </button>

              <button
                type="button"
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                title="Cambiar orden"
                className="sala__sort"
              >
                <SlidersHorizontal className="icon icon--tiny icon--gold" />
                <span>{sortOrder === 'desc' ? 'Más recientes' : 'Cronológico'}</span>
              </button>
            </div>
          </div>

          <div className="sala__count">
            <span>
              Mostrando <strong>{filteredVideos.length}</strong> de {totalVideos} sesiones
            </span>
            <span className="sala__count-hint">
              Haz clic en cualquier video para reproducirlo inmediatamente
            </span>
          </div>
        </section>

        {/* Catálogo */}
        {loading ? (
          <div className="sala__loading">
            <div className="spinner" />
            <p>Cargando catálogo audiovisual de Sala de Profesores...</p>
          </div>
        ) : filteredVideos.length === 0 ? (
          <div className="sala__empty">
            <HelpCircle className="sala__empty-icon" />
            <h3 className="sala__empty-title">No se encontraron sesiones</h3>
            <p className="sala__empty-text">
              No hay videos que coincidan con los términos de búsqueda. Intenta con otra palabra clave como "sectas", "canon", "ciencias" o "mitos".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              className="sala__empty-reset"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="sala__grid">
            {filteredVideos.map((video) => {
              const isCurrentlyPlaying = selectedVideo?.id === video.id;

              return (
                <article
                  key={video.id}
                  onClick={() => handleSelectVideo(video)}
                  className={isCurrentlyPlaying ? 'video-card is-playing' : 'video-card'}
                >
                  <div className="video-card__media">
                    <img
                      src={video.thumb}
                      alt={video.title}
                      loading="lazy"
                      className="video-card__image"
                    />

                    <div className="video-card__overlay">
                      <div className="video-card__play">
                        <Play className="video-card__play-icon" />
                      </div>
                    </div>

                    {video.duration && (
                      <span className="video-card__duration">
                        <Clock className="icon icon--xs icon--gold" />
                        <span>{video.duration}</span>
                      </span>
                    )}

                    <div className="video-card__badges">
                      {video.episodeNumber && (
                        <span className="video-card__episode">Ep. {video.episodeNumber}</span>
                      )}
                      {video.isQandA ? (
                        <span className="video-card__type video-card__type--qna">
                          <HelpCircle className="video-card__type-icon" />
                          <span>Q&amp;A</span>
                        </span>
                      ) : (
                        <span className="video-card__type video-card__type--lesson">Cátedra</span>
                      )}
                    </div>

                    {isCurrentlyPlaying && <div className="video-card__now">Reproduciendo ahora</div>}
                  </div>

                  <div className="video-card__body">
                    <div className="video-card__texts">
                      <h3 className="video-card__title">{video.title}</h3>

                      {video.summary && <p className="video-card__summary">{video.summary}</p>}
                    </div>

                    <div className="video-card__footer">
                      <span className="video-card__cta">
                        <span>{isCurrentlyPlaying ? 'En reproducción' : 'Reproducir sesión'}</span>
                        <ChevronRight className="icon icon--tiny" />
                      </span>

                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Ver directamente en YouTube"
                        className="video-card__external"
                      >
                        <ExternalLink className="icon icon--tiny" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Nota de actualización */}
        <section className="sala__info">
          <div className="sala__info-head">
            <Radio className="icon icon--accent" />
            <span>Conexión Dinámica con YouTube</span>
          </div>
          <p className="sala__info-text">
            Esta sección está enlazada directamente con la lista de reproducción oficial de la Escuela de Alexandría (<strong>ID: {PLAYLIST_ID}</strong>). El reproductor principal reproduce la lista completa en vivo directamente desde los servidores de YouTube, por lo que cualquier nuevo video que los docentes publiquen se incorporará automáticamente a la secuencia.
          </p>
          <div className="sala__info-links">
            <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer" className="sala__info-link">
              <span>Acceder a la lista completa en YouTube</span>
              <ExternalLink className="icon icon--xs" />
            </a>
            <span>&bull;</span>
            <a
              href={`${SITE.social.youtubeChannel}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="sala__info-link sala__info-link--muted"
            >
              <span>Suscribirse al canal oficial</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
