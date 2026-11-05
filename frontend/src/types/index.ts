/**
 * Modelo de contenido de la Escuela de Alexandría.
 *
 * Toda la información editorial (programas, sesiones, docentes y seminarios)
 * vive en `src/data/` y se tipa aquí. Las páginas son únicamente presentación:
 * no deben declarar contenido propio ni duplicar textos entre secciones.
 */

/** Sesión o lección de un programa académico. */
export interface Lesson {
  id: string;
  /** Título sin numeración ni nombre del expositor (las páginas añaden la etiqueta). */
  title: string;
  order: number;
  /** ID de YouTube del video embebido. Ausente en grabaciones de pago. */
  youtubeId?: string;
  /** Notas académicas o descripción de la sesión. */
  content: string;
  /** Expositor de la sesión (cátedras magistrales). */
  speaker?: string;
  /** Imagen del expositor o de la cátedra. */
  image?: string;
  /** `false` cuando la grabación se adquiere por PayU. */
  isFree?: boolean;
  /** Pasarela de pago de la grabación, si es de acceso restringido. */
  payuLink?: string;
  /** Programa donde se amplía la información de esta cátedra. */
  courseSlug?: string;
}

/** Ficha del expositor principal de una cátedra. */
export interface LecturerProfile {
  name: string;
  role: string;
  portrait: string;
  bio: string;
  credentials: string[];
  topics: string[];
  payuLink?: string;
}

/** Programa académico: curso, ciclo de conferencias o archivo de cátedras. */
export interface Course {
  id: string;
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  lessons: Lesson[];
  /** Imagen de fondo del banner de la sección. */
  heroImage?: string;
  /** Antetítulo del banner, p. ej. "Ciclo de Formación Histórica". */
  kicker?: string;
  /** Etiqueta que acompaña al reproductor, p. ej. "Conferencia Especializada". */
  tagline?: string;
  /** Descripción extensa para la página de detalle del programa. */
  description?: string;
  lecturer?: LecturerProfile;
}

/** Seminario ya dictado, con su registro fotográfico. */
export interface Seminario {
  id: string;
  title: string;
  date: string;
  image: string;
  summary: string;
}

/** Docente o colaborador del cuerpo académico. */
export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string[];
}
