import { Seminario } from '../types';

/** Brochure oficial de la oferta académica vigente. */
export const brochure = {
  title: 'Brochure & Malla Curricular',
  subtitle: 'Oferta Académica 2026 - 2027 · Escuela de Alexandría',
  image: '/images/malla-curricular-2026-2027.jpg',
  fileName: 'Malla-Curricular-Escuela-Alexandria-2026-2027.jpg',
  /** Áreas de formación que aparecen en la malla curricular. */
  areas: ['Divinidad', 'Filología', 'Eclesiología', 'Historia', 'Lenguas Bíblicas'],
  languages: 'Griego Helenístico, Hebreo Bíblico, Arameo y Siríaco',
  heroImage: '/images/seminarios-hero.jpg'
};

/** Registro de seminarios y módulos ya impartidos por el cuerpo docente. */
export const seminariosData: Seminario[] = [
  {
    id: 'historia-cristianismo-primitivo',
    title: 'Historia del Cristianismo Primitivo',
    date: '17.06.2022',
    image: '/images/seminario-historia-cristianismo-primitivo.jpg',
    summary:
      'Seminario de introducción a los tres primeros siglos de la historia de las comunidades cristianas, desarrollado en torno al análisis de fuentes paleográficas y acontecimientos que marcaron estos siglos.'
  },
  {
    id: 'eclesiologia',
    title: 'Eclesiología',
    date: '25.02.2022',
    image: '/images/seminario-eclesiologia.jpg',
    summary:
      'En el año 305 d.C., bajo el emperador Diocleciano, la religión cristiana estaba terminantemente prohibida. Examen profundo de las estructuras y doctrina eclesiológica de la iglesia primitiva.'
  },
  {
    id: 'cosmologia-biblica',
    title: 'Cosmología Bíblica',
    date: '22.11.2021',
    image: '/images/seminario-cosmologia-biblica.jpg',
    summary:
      'Comprender la cosmovisión de las culturas del Antiguo Cercano Oriente (Mesopotamia, Egipto, Canaán) conduce a una comprensión más fiel de cómo los Israelitas veían a Dios y al Universo.'
  },
  {
    id: 'metodos-de-estudio',
    title: 'Métodos de estudio e investigación Bíblica',
    date: '22.11.2021',
    image: '/images/seminario-metodos-de-estudio.jpg',
    summary:
      'Desde herramientas para un estudio bíblico metódico, comprensión lectora y análisis denotado, hasta métodos avanzados de exégesis filológica del texto bíblico.'
  },
  {
    id: 'origen-del-mal',
    title: 'El origen del mal en la Biblia Hebrea',
    date: '18.06.2021',
    image: '/images/seminario-origen-del-mal.jpg',
    summary:
      'Exploración de la problemática del mal en la biblia hebrea: su origen ontológico en el hombre, el desarrollo demonológico y la soberanía de YHVH frente a las teologías del Cercano Oriente.'
  },
  {
    id: 'modelos-mesianicos',
    title: 'Modelos Mesiánicos',
    date: '13.01.2021',
    image: '/images/seminario-modelos-mesianicos.jpg',
    summary:
      'La figura del Mesías en el judaísmo del Segundo Templo: rey davídico, sacerdote de Melquisedec, siervo sufriente y el Hijo del Hombre celestial.'
  },
  {
    id: 'critica-textual-seminario',
    title: 'Crítica Textual Bíblica',
    date: 'Archivo',
    image: '/images/seminario-critica-textual.jpg',
    summary:
      'Metodología comparativa de variantes en papiros (P46, P66, P75) y códices unciales para reconstruir con rigor científico el texto original del Nuevo y Antiguo Testamento.'
  }
];
