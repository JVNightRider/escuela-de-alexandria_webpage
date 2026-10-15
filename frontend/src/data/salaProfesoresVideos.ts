export interface SalaProfesorVideo {
  id: string;
  index: number;
  title: string;
  duration: string;
  thumb: string;
  isQandA: boolean;
  episodeNumber?: string;
  summary?: string;
}

export const PLAYLIST_ID = 'PLdHrJh4CV68X45FYZkl2dqj1KNMw6ih4n';
export const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLdHrJh4CV68X45FYZkl2dqj1KNMw6ih4n';

export const fallbackSalaProfesoresVideos: SalaProfesorVideo[] = [
  {
    index: 1,
    id: "DAbnU8id_b8",
    title: "001 SALA DE PROFESORES: ¿Cómo saber si estoy en una secta?",
    duration: "54:01",
    thumb: "https://i.ytimg.com/vi/DAbnU8id_b8/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "001",
    summary: "Criterios sociológicos, teológicos y psicológicos para identificar dinámicas sectarias y autoritarismo espiritual."
  },
  {
    index: 2,
    id: "bd2aTZJbmsY",
    title: "001 SALA DE PROFESORES: ¿Cómo saber si estoy en una secta? – Tiempo de Preguntas",
    duration: "1:09:12",
    thumb: "https://i.ytimg.com/vi/bd2aTZJbmsY/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "001",
    summary: "Sesión en vivo de preguntas de los asistentes sobre manipulación doctrinal, liderazgo y salidas saludables de comunidades cerradas."
  },
  {
    index: 3,
    id: "tMbs8wHrQZM",
    title: "002 SALA DE PROFESORES: ¿Cómo aplicar las enseñanzas de EdA en nuestras congregaciones?",
    duration: "1:09:57",
    thumb: "https://i.ytimg.com/vi/tMbs8wHrQZM/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "002",
    summary: "Puentes pastorales y pedagógicos entre la investigación académica rigurosa y la vida de fe comunitaria."
  },
  {
    index: 4,
    id: "L_nR23czLko",
    title: "002 SALA DE PROFESORES: ¿Cómo aplicar las enseñanzas de EdA? – Tiempo de Preguntas",
    duration: "59:27",
    thumb: "https://i.ytimg.com/vi/L_nR23czLko/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "002",
    summary: "Respuestas a inquietudes sobre cómo compartir descubrimientos exegéticos sin provocar rupturas en comunidades tradicionales."
  },
  {
    index: 5,
    id: "9WpJQvCvdXc",
    title: "003 SALA DE PROFESORES: ¿Qué Son las Ciencias Bíblicas?",
    duration: "1:03:14",
    thumb: "https://i.ytimg.com/vi/9WpJQvCvdXc/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "003",
    summary: "Diferenciación entre teología confesional y ciencias bíblicas: método histórico-crítico, filología y arqueología."
  },
  {
    index: 6,
    id: "9TGZi7NHuNc",
    title: "003 SALA DE PROFESORES: ¿Qué Son las Ciencias Bíblicas? – Tiempo de Preguntas",
    duration: "1:03:05",
    thumb: "https://i.ytimg.com/vi/9TGZi7NHuNc/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "003",
    summary: "Diálogo abierto sobre objetividad científica, presupuestos de fe e historicidad de los textos bíblicos."
  },
  {
    index: 7,
    id: "yuLykCps0RA",
    title: "004 SALA DE PROFESORES: Sectas, Política y Cristianismo",
    duration: "1:04:14",
    thumb: "https://i.ytimg.com/vi/yuLykCps0RA/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "004",
    summary: "Intersección entre ideologías políticas, nacionalismos religiosos y manipulación de textos sagrados."
  },
  {
    index: 8,
    id: "Ix7fXLbNqXA",
    title: "004 SALA DE PROFESORES: Sectas, Política y Cristianismo – Tiempo de Preguntas",
    duration: "42:38",
    thumb: "https://i.ytimg.com/vi/Ix7fXLbNqXA/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "004",
    summary: "Preguntas del público sobre teología del dominio, laicidad estatal y ética cristiana en la esfera pública."
  },
  {
    index: 9,
    id: "qHGccfanRmc",
    title: "005 SALA DE PROFESORES: Mitos, Historia y Biblia",
    duration: "1:24:04",
    thumb: "https://i.ytimg.com/vi/qHGccfanRmc/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "005",
    summary: "El género mítico en la literatura del Antiguo Oriente Próximo y su presencia en los relatos de Génesis y los profetas."
  },
  {
    index: 10,
    id: "GOF-9ICIFgc",
    title: "005 SALA DE PROFESORES: Mitos, Historia y Biblia – Tiempo de Preguntas",
    duration: "1:00:33",
    thumb: "https://i.ytimg.com/vi/GOF-9ICIFgc/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "005",
    summary: "Resolución de dudas sobre el diluvio, la creación babilónica Enuma Elish y la historicidad de los patriarcas."
  },
  {
    index: 11,
    id: "mz9_PXgstAA",
    title: "006 SALA DE PROFESORES: ¿El Canon… O los Cánones de la Biblia?",
    duration: "1:07:59",
    thumb: "https://i.ytimg.com/vi/mz9_PXgstAA/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "006",
    summary: "Pluralidad de colecciones canónicas: cánones hebreo, alejandrino (Septuaginta), etíope y siríaco."
  },
  {
    index: 12,
    id: "jIH8az5l5xM",
    title: "006 SALA DE PROFESORES: ¿El Canon… O los Cánones de la Biblia? – Tiempo de Preguntas",
    duration: "1:11:25",
    thumb: "https://i.ytimg.com/vi/jIH8az5l5xM/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "006",
    summary: "Preguntas sobre libros deuterocanónicos, apócrifos del Nuevo Testamento y criterios de selección conciliar."
  },
  {
    index: 13,
    id: "1J_4JFun310",
    title: "007 SALA DE PROFESORES: El Mesianismo Esenio",
    duration: "1:16:14",
    thumb: "https://i.ytimg.com/vi/1J_4JFun310/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "007",
    summary: "Los dos mesías de Qumrán (aarónico y davídico), el Maestro de Justicia y la literatura sectaria del Mar Muerto."
  },
  {
    index: 14,
    id: "6JZpz66rk1c",
    title: "008 SALA DE PROFESORES: CRÍTICA TEXTUAL E INSPIRACIÓN BÍBLICA – Añadir, Quitar Versos…y Aún ¡Libros!",
    duration: "1:21:03",
    thumb: "https://i.ytimg.com/vi/6JZpz66rk1c/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "008",
    summary: "La coma joánica, el final de Marcos y la perícopa de la adúltera frente a las nociones de inerrancia e inspiración."
  },
  {
    index: 15,
    id: "VhcBmhB1axk",
    title: "007 SALA DE PROFESORES: El Mesianismo Esenio – Tiempo de Preguntas",
    duration: "37:25",
    thumb: "https://i.ytimg.com/vi/VhcBmhB1axk/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "007",
    summary: "Debate sobre posibles nexos entre Juan el Bautista, Jesús de Nazaret y la comunidad esenia de Qumrán."
  },
  {
    index: 16,
    id: "MDwO-Z-BsqI",
    title: "008 SALA DE PROFESORES: CRÍTICA TEXTUAL E INSPIRACIÓN BÍBLICA - Tiempo de Preguntas",
    duration: "1:03:02",
    thumb: "https://i.ytimg.com/vi/MDwO-Z-BsqI/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "008",
    summary: "Interacción con los estudiantes sobre variantes de manuscritos griegos y ediciones críticas de Nestle-Aland."
  },
  {
    index: 17,
    id: "DQmKKPK2M7M",
    title: "009 SALA DE PROFESORES: El Lenguaje Mitológico y la Interpretación Bíblica",
    duration: "1:23:13",
    thumb: "https://i.ytimg.com/vi/DQmKKPK2M7M/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "009",
    summary: "Metáforas cósmicas, combate contra el caos primordial (Leviatán, Rahab) y cosmovisión semítica antigua."
  },
  {
    index: 18,
    id: "eYPCUsE308Y",
    title: "009 SALA DE PROFESORES: El Lenguaje Mitológico y la Interpretación Bíblica – Tiempo de Preguntas",
    duration: "24:59",
    thumb: "https://i.ytimg.com/vi/eYPCUsE308Y/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "009",
    summary: "Aclaraciones sobre desmitologización, teología bíblica y lectura simbólica versus lectura literalista."
  },
  {
    index: 19,
    id: "RjA9rvPcLKo",
    title: "010 SALA DE PROFESORES: Maniqueísmo, Calvinismo y la Teología de la Prosperidad",
    duration: "1:28:57",
    thumb: "https://i.ytimg.com/vi/RjA9rvPcLKo/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "010",
    summary: "Rastreo histórico de las ideas de predestinación, dualismo cosmológico y mercantilización contemporánea de la fe."
  },
  {
    index: 20,
    id: "Xc3RcRLnvNs",
    title: "010 SALA DE PROFESORES: Maniqueísmo, Calvinismo y la Teología de la Prosperidad –Tiempo de Preguntas",
    duration: "57:10",
    thumb: "https://i.ytimg.com/vi/Xc3RcRLnvNs/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "010",
    summary: "Respuestas directas sobre el origen agustiniano de la predestinación y los abusos de los pactos monetarios."
  },
  {
    index: 21,
    id: "Y3vohRblsAk",
    title: "011 SALA DE PROFESORES: Qumran y Los Seguidores de Jesús",
    duration: "1:11:50",
    thumb: "https://i.ytimg.com/vi/Y3vohRblsAk/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "011",
    summary: "Similitudes y marcadas divergencias entre la secta sacerdotal de Qumrán y el movimiento galileo de Jesús."
  },
  {
    index: 22,
    id: "AwOg0x6l_V4",
    title: "011 SALA DE PROFESORES: Qumran y Los Seguidores de Jesús – Tiempo de Preguntas",
    duration: "1:04:03",
    thumb: "https://i.ytimg.com/vi/AwOg0x6l_V4/hqdefault.jpg",
    isQandA: true,
    episodeNumber: "011",
    summary: "Respuestas a preguntas sobre la pureza ritual, los celibatos esenios y las comidas comunitarias."
  },
  {
    index: 23,
    id: "nGIyt58aLWg",
    title: "012 SALA DE PROFESORES: Escepticismo y Fundamentalismo – Dos Extremos Igualmente Tóxicos",
    duration: "2:13:56",
    thumb: "https://i.ytimg.com/vi/nGIyt58aLWg/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "012",
    summary: "Análisis epistemológico sobre cómo superar el cinismo destructivo y la cerrazón dogmática mediante el estudio honesto."
  },
  {
    index: 24,
    id: "NUATA8D_78g",
    title: "013 SALA DE PROFESORES: HOMENAJE a Nuestro Hermano – William Márquez",
    duration: "1:05:45",
    thumb: "https://i.ytimg.com/vi/NUATA8D_78g/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "013",
    summary: "Emotivo homenaje y reflexión en memoria del hermano y colaborador William Márquez junto al cuerpo docente."
  },
  {
    index: 25,
    id: "AIGhQBWrAzI",
    title: "014 SALA DE PROFESORES: El Sistema Romano II - Teología y Formación de un Imperio Cristianizado.",
    duration: "1:23:52",
    thumb: "https://i.ytimg.com/vi/AIGhQBWrAzI/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "014",
    summary: "De movimiento proscrito a religión del Imperio: Constantino, el Concilio de Nicea (325 d.C.) y la institucionalización."
  },
  {
    index: 26,
    id: "p8PWbIEKK2U",
    title: "015 SALA DE PROFESORES: Los Manuscritos de la Biblia ¿Son Confiables los Textos Alejandrinos?",
    duration: "1:50:43",
    thumb: "https://i.ytimg.com/vi/p8PWbIEKK2U/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "015",
    summary: "Evaluación paleográfica de los tipos textuales: Alejandrino, Bizantino y Occidental; fiabilidad de códices Sinaítico y Vaticano."
  },
  {
    index: 27,
    id: "iBMiV-8GHGM",
    title: "016 SALA DE PROFESORES: Avances y Desafíos en la Traducción Bíblica - Globalmente",
    duration: "1:42:02",
    thumb: "https://i.ytimg.com/vi/iBMiV-8GHGM/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "016",
    summary: "Equivalencia formal vs. equivalencia dinámica: dilemas traductológicos contemporáneos en idiomas modernos."
  },
  {
    index: 28,
    id: "p_k26Py6a90",
    title: "017 SALA DE PROFESORES: Arqueología, Paleografía y el Éxodo ¿Plausibilidad Histórica?",
    duration: "1:57:34",
    thumb: "https://i.ytimg.com/vi/p_k26Py6a90/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "017",
    summary: "Evidencias estratigráficas, inscripciones semíticas tempranas en el Sinaí (Serabit el-Khadim) y debate arqueológico del Éxodo."
  },
  {
    index: 29,
    id: "C43XljwKcFY",
    title: "018 SALA DE PROFESORES: Una Autocrítica / Como Escuela de Ciencias Bíblicas",
    duration: "1:42:02",
    thumb: "https://i.ytimg.com/vi/C43XljwKcFY/hqdefault.jpg",
    isQandA: false,
    episodeNumber: "018",
    summary: "Revisión metodológica, desafíos pedagógicos y horizonte académico futuro de la Escuela de Alexandría."
  }
];
