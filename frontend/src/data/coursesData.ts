import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'canones-biblicos',
    slug: 'canones-biblicos',
    title: 'Cánones Bíblicos: Formación y Desarrollo',
    summary: 'Investigación crítica sobre la compilación, criterios de canonicidad y variantes de los códices bíblicos en la antigüedad.',
    imageUrl: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000165-a4325a4326/RabulaGospelsFolio04vCanonTable.jpg?ph=23a7ea3ebd',
    category: 'Crítica Textual',
    lessons: [
      {
        id: 'cb-1',
        title: '1. Definición y Origen del Canon Bíblico',
        order: 1,
        videoUrl: 'https://www.youtube.com/embed/QvAVSCYGmq4',
        content: 'En esta sesión analizamos el vocablo griego "kanon" (vara de medir) y su adopción gradual en los concilios tempranos y las comunidades judías y cristianas del siglo I al IV d.C.'
      },
      {
        id: 'cb-2',
        title: '2. El Tanaj, la Septuaginta y los Manuscritos de Qumrán',
        order: 2,
        videoUrl: 'https://www.youtube.com/embed/KL5a90uixrE',
        content: 'Examen de los rollos de Qumrán (Mar Muerto) y su impacto en la comprensión de la fluidez textual en el judaísmo del Segundo Templo.'
      },
      {
        id: 'cb-3',
        title: '3. El Canon del Nuevo Testamento y los Concilios',
        order: 3,
        videoUrl: 'https://www.youtube.com/embed/CVBe_1-6w8Y',
        content: 'El Fragmento Muratoriano, Marción, Atanasio de Alejandría (367 d.C.) y los grandes unciales del siglo IV (Sinaítico y Vaticano).'
      },
      {
        id: 'cb-4',
        title: '4. Concilios y Fijación Definitiva',
        order: 4,
        videoUrl: 'https://www.youtube.com/embed/c3i1Mkaei-E',
        content: 'Análisis de los concilios de Hipona y Cartago y la transmisión de los códices en las iglesias orientales y occidentales.'
      }
    ]
  },
  {
    id: 'panorama-biblico',
    slug: 'panorama-biblico',
    title: 'Panorama Bíblico e Histórico',
    summary: 'Recorrido exhaustivo por el contexto geopolítico, arqueológico y literario de la cuenca del Mediterráneo y el Antiguo Cercano Oriente.',
    imageUrl: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000149-1ea391ea3b/WEB3-Judean-Desert-MOUNTAINS-shutterstock_1152166163.jpg?ph=23a7ea3ebd',
    category: 'Historia Bíblica',
    lessons: [
      {
        id: 'pb-1',
        title: '1. Geografía y Arqueología del Antiguo Cercano Oriente',
        order: 1,
        videoUrl: 'https://www.youtube.com/embed/Ak3FMCxm-FE',
        content: 'Comprender la geografía histórica es vital: la fértil media luna, las encrucijadas de Canaán y los imperios asirio, babilonio y persa.'
      },
      {
        id: 'pb-2',
        title: '2. El Período Patriarcal y el Bronce Tardío',
        order: 2,
        videoUrl: 'https://www.youtube.com/embed/zsJ78SrwSJw',
        content: 'Análisis textual de los relatos patriarcales a la luz de las tablillas de Mari, Nuzi y los archivos de Ugarit.'
      },
      {
        id: 'pb-3',
        title: '3. El Éxodo, la Conquista y la Era de los Jueces',
        order: 3,
        videoUrl: 'https://www.youtube.com/embed/SfBfqxHpG7g',
        content: 'Modelos históricos de asentamiento en Canaán, la estela de Merneptah y las confederaciones tribales.'
      },
      {
        id: 'pb-4',
        title: '4. La Monarquía Unida y Dividida: Israel y Judá',
        order: 4,
        videoUrl: 'https://www.youtube.com/embed/Fc4HQXAmCMQ',
        content: 'Arqueología de Jerusalén, las inscripciones de Tel Dan, Mesa y los anales asirios sobre los reyes de Samaria.'
      },
      {
        id: 'pb-5',
        title: '5. El Exilio Babilónico y la Crisis Textual',
        order: 5,
        videoUrl: 'https://www.youtube.com/embed/-Kej3z6jO-A',
        content: 'La caída de Jerusalén en 586 a.C., la cautividad en Mesopotamia y el surgimiento del judaísmo del Segundo Templo.'
      },
      {
        id: 'pb-6',
        title: '6. El Período Persa y la Reconstrucción',
        order: 6,
        videoUrl: 'https://www.youtube.com/embed/hyoS7NcyQcU',
        content: 'El cilindro de Ciro, el liderazgo de Esdras y Nehemías y la redacción final de las tradiciones sacerdotales.'
      },
      {
        id: 'pb-7',
        title: '7. El Helenismo, Alejandro Magno y los Ptolomeos',
        order: 7,
        videoUrl: 'https://www.youtube.com/embed/5EQUGg2GoCM',
        content: 'La traducción de la Septuaginta (LXX) en Alejandría y la crisis macabea frente al imperio seléucida.'
      },
      {
        id: 'pb-8',
        title: '8. El Mundo Romano y el Surgimiento del Cristianismo',
        order: 8,
        videoUrl: 'https://www.youtube.com/embed/3yIKwPpBf78',
        content: 'Herodes el Grande, las provincias romanas de Judea y Galilea, y el trasfondo social de los primeros discípulos.'
      }
    ]
  },
  {
    id: 'catedra-exclusiva',
    slug: 'catedra-exclusiva',
    title: 'Cátedra Exclusiva: Jesús de Nazareth según los textos Gnósticos',
    summary: 'Masterclass magistral con el Dr. Antonio Piñero sobre literatura gnóstica, el Jesús histórico y los orígenes del cristianismo.',
    imageUrl: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000147-072dd072df/Pi%C3%B1ero%20page.jpg?ph=23a7ea3ebd',
    category: 'Cátedra Magistral',
    lessons: [
      {
        id: 'ce-1',
        title: '1. Presentación y Fundamentos de los Textos Gnósticos (Dr. Antonio Piñero)',
        order: 1,
        videoUrl: 'https://www.youtube.com/embed/8it9MvBFOrI',
        content: 'Introducción a los manuscritos de Nag Hammadi, los evangelios apócrifos y la diferenciación teológica entre el cristianismo proto-ortodoxo y las comunidades gnósticas.'
      },
      {
        id: 'ce-2',
        title: '2. ¿Son los textos gnósticos evidencia del perfil histórico de Jesús?',
        order: 2,
        videoUrl: 'https://www.youtube.com/embed/8it9MvBFOrI',
        content: 'Comparación filológica entre el Jesús Gnóstico y el Cristo Neotestamentario por el Dr. Antonio Piñero.'
      }
    ]
  },
  {
    id: 'cronicas',
    slug: 'cronicas',
    title: 'Crónicas: Archivo de Cátedras Magistrales',
    summary: 'Colección de cátedras magistrales con el Dr. Adolfo Roitman, Dr. Rene Krüger y Dr. Antonio Piñero sobre manuscritos de Qumrán y literatura del Segundo Templo.',
    imageUrl: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000146-568185681a/roitman-2.jpg?ph=23a7ea3ebd',
    category: 'Archivo Histórico',
    lessons: [
      {
        id: 'cr-1',
        title: '1. El aporte de los manuscritos de Qumrán al texto Bíblico (Dr. Adolfo Roitman)',
        order: 1,
        videoUrl: 'https://www.youtube.com/embed/01gCkU8izz8',
        content: 'Conferencia abierta por el Dr. Adolfo Roitman (Curador de los Rollos del Mar Muerto y Director del Santuario del Libro en Jerusalén).'
      },
      {
        id: 'cr-2',
        title: '2. Los Hijos de la Luz y los Hijos de las tinieblas en Qumrán (Dr. Rene Krüger)',
        order: 2,
        videoUrl: 'https://www.youtube.com/embed/01gCkU8izz8',
        content: 'Examen de la regla de la comunidad (1QS) y el rollo de la guerra (1QM) por el renombrado erudito Dr. Rene Krüger.'
      },
      {
        id: 'cr-3',
        title: '3. Jesús de Nazareth según los textos gnósticos (Dr. Antonio Piñero)',
        order: 3,
        videoUrl: 'https://www.youtube.com/embed/8it9MvBFOrI',
        content: 'Cátedra magistral con análisis crítico de los evangelios apócrifos y la figura histórica de Jesús.'
      }
    ]
  }
];

export const getCourses = async (): Promise<Course[]> => {
  return coursesData;
};

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
  return coursesData.find((c) => c.slug === slug) || null;
};
