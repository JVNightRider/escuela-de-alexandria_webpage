import { Course } from '../types';

/**
 * Fuente única de los programas académicos de la Escuela (catálogo, secciones
 * temáticas y lecciones en video). Las páginas de `pages/education/` leen de
 * aquí: no deben repetir títulos, descripciones ni IDs de video.
 */
export const coursesData: Course[] = [
  {
    id: 'canones-biblicos',
    slug: 'canones-biblicos',
    title: 'Cánones Bíblicos: Formación y Desarrollo',
    summary:
      'Investigación crítica sobre la compilación, criterios de canonicidad y variantes de los códices bíblicos en la antigüedad.',
    imageUrl: '/images/curso-canones-biblicos.jpg',
    heroImage: '/images/curso-canones-biblicos.jpg',
    category: 'Crítica Textual',
    kicker: 'Investigación Textual & Manuscritos',
    tagline: 'Conferencia Especializada',
    lessons: [
      {
        id: 'cb-1',
        order: 1,
        title: 'Definición y Origen del Canon Bíblico',
        youtubeId: 'QvAVSCYGmq4',
        content:
          'Análisis filológico del término griego «kanon» (vara de medir) y de su adopción gradual en las comunidades judías y cristianas entre los siglos I y IV d.C., hasta el desarrollo de las listas autoritativas.'
      },
      {
        id: 'cb-2',
        order: 2,
        title: 'El Tanaj, la Septuaginta y los Manuscritos de Qumrán',
        youtubeId: 'KL5a90uixrE',
        content:
          'La diversidad textual de los rollos del Mar Muerto y su impacto en la comprensión de la fluidez textual del judaísmo del Segundo Templo, junto a los criterios de canonicidad rabínicos en Jamnia / Yavne.'
      },
      {
        id: 'cb-3',
        order: 3,
        title: 'El Canon del Nuevo Testamento y los Concilios',
        youtubeId: 'CVBe_1-6w8Y',
        content:
          'El Fragmento Muratoriano, Marción, Eusebio de Cesarea y la carta festal de Atanasio de Alejandría del año 367 d.C. como hitos en la fijación del canon neotestamentario.'
      },
      {
        id: 'cb-4',
        order: 4,
        title: 'Concilios y Grandes Códices Unciales',
        youtubeId: 'c3i1Mkaei-E',
        content:
          'El Códice Sinaítico, Vaticano y Alejandrino; los concilios de Hipona y Cartago y la fijación definitiva de los cánones occidentales y orientales.'
      }
    ]
  },
  {
    id: 'panorama-biblico',
    slug: 'panorama-biblico',
    title: 'Panorama Bíblico e Histórico',
    summary:
      'Recorrido exhaustivo por el contexto geopolítico, arqueológico y literario de la cuenca del Mediterráneo y el Antiguo Cercano Oriente.',
    imageUrl: '/images/curso-panorama-biblico.jpg',
    heroImage: '/images/curso-panorama-biblico.jpg',
    category: 'Historia Bíblica',
    kicker: 'Ciclo de Formación Histórica',
    tagline: 'Sesión Académica',
    lessons: [
      {
        id: 'pb-1',
        order: 1,
        title: 'Geografía y Arqueología del Antiguo Cercano Oriente',
        youtubeId: 'Ak3FMCxm-FE',
        content:
          'Exploración geográfica de Canaán, rutas del comercio antiguo y excavaciones en el Creciente Fértil: la media luna fértil, las encrucijadas de Canaán y los imperios asirio, babilonio y persa.'
      },
      {
        id: 'pb-2',
        order: 2,
        title: 'El Período Patriarcal y el Bronce Tardío',
        youtubeId: 'zsJ78SrwSJw',
        content:
          'Análisis textual de los relatos patriarcales a la luz de las tablillas de Mari, Nuzi y los archivos de Ugarit.'
      },
      {
        id: 'pb-3',
        order: 3,
        title: 'El Éxodo, la Conquista y la Era de los Jueces',
        youtubeId: 'SfBfqxHpG7g',
        content:
          'Modelos históricos de asentamiento en Canaán, la estela de Merneptah y las confederaciones tribales.'
      },
      {
        id: 'pb-4',
        order: 4,
        title: 'La Monarquía Unida y Dividida: Israel y Judá',
        youtubeId: 'Fc4HQXAmCMQ',
        content:
          'Arqueología de Jerusalén, las inscripciones de Tel Dan y Mesa, y los anales asirios sobre los reyes de Samaria.'
      },
      {
        id: 'pb-5',
        order: 5,
        title: 'El Exilio Babilónico y la Crisis Textual',
        youtubeId: '-Kej3z6jO-A',
        content:
          'La caída de Jerusalén en 586 a.C., la cautividad en Mesopotamia y el surgimiento del judaísmo del Segundo Templo.'
      },
      {
        id: 'pb-6',
        order: 6,
        title: 'El Período Persa y la Reconstrucción',
        youtubeId: 'hyoS7NcyQcU',
        content:
          'El cilindro de Ciro, el liderazgo de Esdras y Nehemías y la redacción final de las tradiciones sacerdotales.'
      },
      {
        id: 'pb-7',
        order: 7,
        title: 'El Helenismo, Alejandro Magno y los Ptolomeos',
        youtubeId: '5EQUGg2GoCM',
        content:
          'La traducción de la Septuaginta (LXX) en Alejandría y la crisis macabea frente al imperio seléucida.'
      },
      {
        id: 'pb-8',
        order: 8,
        title: 'El Mundo Romano y el Surgimiento del Cristianismo',
        youtubeId: '3yIKwPpBf78',
        content:
          'Herodes el Grande, las provincias romanas de Judea y Galilea, y el trasfondo social de los primeros discípulos.'
      }
    ]
  },
  {
    id: 'catedra-exclusiva',
    slug: 'catedra-exclusiva',
    title: 'Jesús de Nazareth según los textos Gnósticos',
    summary:
      'Masterclass magistral con el Dr. Antonio Piñero sobre literatura gnóstica, el Jesús histórico y los orígenes del cristianismo.',
    description:
      'Un tema controversial dentro del ámbito académico: la literatura gnóstica de los primeros siglos y su relación con la figura histórica de Jesús de Nazareth. ¿Qué son los textos gnósticos? ¿Qué relación tienen con el cristianismo primitivo?',
    imageUrl: '/images/catedra-pinero-portada.jpg',
    heroImage: '/images/hero-catedra.jpg',
    category: 'Cátedra Magistral',
    kicker: 'Cátedra Magistral',
    tagline: 'Cátedra Magistral',
    lecturer: {
      name: 'Dr. Antonio Piñero Saenz',
      role: 'Catedrático Emérito de Filología Griega · Universidad Complutense de Madrid',
      portrait: '/images/pinero-retrato.jpg',
      bio:
        'Filólogo clásico, escritor e historiador español, especializado en el judaísmo anterior al cristianismo, la vida de Jesús de Nazaret, la fundación del cristianismo y la lengua y literatura del Nuevo Testamento desde una perspectiva científica.',
      credentials: [
        'Licenciado en Filosofía Pura · Universidad Complutense, Madrid (1968)',
        'Licenciado en Filología Clásica · Universidad de Salamanca (1970)',
        'Licenciado en Filología Bíblica Trilingüe · Universidad Pontificia de Salamanca (1976)',
        'Doctor en Filología Clásica · Universidad Complutense, Madrid (1974)'
      ],
      topics: [
        '¿Son los textos gnósticos una evidencia para el perfil histórico de Jesús?',
        '¿Fueron alguna vez estos textos parte del Canon?',
        'Comparación entre el Jesús Gnóstico y el Cristo Neotestamentario.'
      ],
      payuLink: 'https://biz.payulatam.com/L0d1b71A1229BF5'
    },
    lessons: [
      {
        id: 'ce-1',
        order: 1,
        title: 'Presentación de la cátedra',
        youtubeId: '8it9MvBFOrI',
        isFree: true,
        content:
          'Introducción a los manuscritos de Nag Hammadi, los evangelios apócrifos y la diferenciación teológica entre el cristianismo proto-ortodoxo y las comunidades gnósticas.'
      },
      {
        id: 'ce-2',
        order: 2,
        title: 'Cátedra completa: Jesús de Nazareth según los textos Gnósticos',
        isFree: false,
        payuLink: 'https://biz.payulatam.com/L0d1b71A1229BF5',
        content:
          'Grabación íntegra de la masterclass. La comparación filológica entre el Jesús gnóstico y el Cristo neotestamentario se entrega al correo del comprador tras validar el pago por PayU.'
      }
    ]
  },
  {
    id: 'cronicas',
    slug: 'cronicas',
    title: 'Crónicas: Archivo de Cátedras Magistrales',
    summary:
      'Colección de cátedras magistrales con el Dr. Adolfo Roitman, Dr. Rene Krüger y Dr. Antonio Piñero sobre manuscritos de Qumrán y literatura del Segundo Templo.',
    imageUrl: '/images/cronicas-roitman.jpg',
    heroImage: '/images/hero-manuscritos.jpg',
    category: 'Archivo Histórico',
    kicker: 'Archivo Histórico & Audiovisual',
    tagline: 'Archivo de Cátedras',
    lessons: [
      {
        id: 'cr-1',
        order: 1,
        title: 'El aporte de los manuscritos de Qumrán al estudio del texto Bíblico',
        speaker: 'Dr. Adolfo Roitman',
        image: '/images/cronicas-roitman.jpg',
        isFree: true,
        youtubeId: '01gCkU8izz8',
        content:
          'Conferencia abierta del curador de los Rollos del Mar Muerto y director del Santuario del Libro en Jerusalén.'
      },
      {
        id: 'cr-2',
        order: 2,
        title: 'Los Hijos de la Luz y los Hijos de las tinieblas en Qumrán',
        speaker: 'Dr. Rene Krüger',
        image: '/images/cronicas-rene-kruger.jpg',
        isFree: false,
        payuLink: 'https://biz.payulatam.com/L0d1b71280DDECE',
        courseSlug: 'catedra-exclusiva',
        content:
          'Examen de la Regla de la Comunidad (1QS) y el Rollo de la Guerra (1QM) en la literatura sectaria del Mar Muerto.'
      },
      {
        id: 'cr-3',
        order: 3,
        title: 'Jesús de Nazareth según los textos gnósticos',
        speaker: 'Dr. Antonio Piñero',
        image: '/images/catedra-pinero-portada.jpg',
        isFree: false,
        payuLink: 'https://biz.payulatam.com/L0d1b71A1229BF5',
        courseSlug: 'catedra-exclusiva',
        content:
          'Análisis crítico de los evangelios apócrifos y de la figura histórica de Jesús, con las preguntas centrales de la literatura gnóstica.'
      }
    ]
  }
];

/** Lectura asíncrona del catálogo (fachada usada por las páginas de cursos). */
export const getCourses = async (): Promise<Course[]> => coursesData;

export const getCourseBySlug = async (slug: string): Promise<Course | null> =>
  coursesData.find((course) => course.slug === slug) ?? null;

/**
 * Lectura síncrona para las secciones temáticas, cuyo slug es fijo y conocido
 * en tiempo de compilación. Falla de forma explícita si el programa no existe.
 */
export const getCourseSync = (slug: string): Course => {
  const course = coursesData.find((item) => item.slug === slug);
  if (!course) throw new Error(`Programa académico no encontrado: "${slug}"`);
  return course;
};
