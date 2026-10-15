import {
  SalaProfesorVideo,
  fallbackSalaProfesoresVideos,
  PLAYLIST_ID
} from '../data/salaProfesoresVideos';

const CACHE_KEY = 'eda_sala_profesores_videos_v1';
const CACHE_TIME_KEY = 'eda_sala_profesores_updated_at';

export interface PlaylistSyncResult {
  videos: SalaProfesorVideo[];
  isLive: boolean;
  source: 'api' | 'cache' | 'fallback';
  lastUpdated?: string;
  totalCount: number;
}

/**
 * Fetches playlist items from YouTube Data API v3 if an API key is available.
 * If not, falls back to localStorage cache or the curated static playlist data.
 */
export async function getSalaProfesoresVideos(manualApiKey?: string): Promise<PlaylistSyncResult> {
  const envApiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined;
  const apiKey = manualApiKey?.trim() || envApiKey?.trim();

  // 1. If API key exists, try to fetch live from YouTube Data API v3
  if (apiKey) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${PLAYLIST_ID}&key=${apiKey}`;
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        if (data.items && Array.isArray(data.items)) {
          const liveVideos: SalaProfesorVideo[] = data.items.map((item: any, idx: number) => {
            const snippet = item.snippet || {};
            const videoId = snippet.resourceId?.videoId || item.contentDetails?.videoId || '';
            const title = snippet.title || 'Sesión Sala de Profesores';
            const isQandA = title.toLowerCase().includes('tiempo de preguntas') || title.toLowerCase().includes('preguntas');
            const epMatch = /^(\d{3})/.exec(title);
            const thumb = snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

            return {
              index: idx + 1,
              id: videoId,
              title,
              duration: '', // Live API playlistItems doesn't include duration without an extra call
              thumb,
              isQandA,
              episodeNumber: epMatch ? epMatch[1] : undefined,
              summary: snippet.description ? snippet.description.slice(0, 160) + '...' : undefined
            };
          });

          // Save to localStorage
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(liveVideos));
            localStorage.setItem(CACHE_TIME_KEY, new Date().toISOString());
          } catch (e) {
            // LocalStorage might be full or disabled, ignore
          }

          return {
            videos: liveVideos,
            isLive: true,
            source: 'api',
            lastUpdated: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
            totalCount: liveVideos.length
          };
        }
      }
    } catch (err) {
      console.warn('YouTube API fetch failed, falling back to cache/local dataset:', err);
    }
  }

  // 2. Check localStorage cache
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return {
          videos: parsed,
          isLive: false,
          source: 'cache',
          lastUpdated: cachedTime ? new Date(cachedTime).toLocaleDateString('es-ES') : undefined,
          totalCount: parsed.length
        };
      }
    }
  } catch (e) {
    // ignore localStorage errors
  }

  // 3. Fallback to curated full collection (29 verified videos)
  return {
    videos: fallbackSalaProfesoresVideos,
    isLive: false,
    source: 'fallback',
    lastUpdated: 'Reciente',
    totalCount: fallbackSalaProfesoresVideos.length
  };
}
