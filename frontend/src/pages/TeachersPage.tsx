import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

interface Teacher {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string[];
}

const teachersData: Teacher[] = [
  {
    id: 'jesus-mendoza',
    name: 'Jesús Francisco Mendoza',
    title: 'Profesor de Divinidad',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000356-240e2240e4/DSC04012.jpeg?ph=23a7ea3ebd',
    bio: [
      'Venezolano y cristiano, egresado de la Escuela de Fotografía y Artes "Fotoarte" como Fotógrafo Profesional y de la Escuela de Medios "Cieca" como Realizador Cinematográfico. Reside en Edimburgo, Escocia, y por temporadas trabaja como Tatuador Profesional en Lisboa, Portugal.',
      'Actualmente cursa la Licenciatura en Teología Bíblica en el Edinburgh Theological Seminary. Se ha especializado en Hebreo Bíblico, Arameo, Griego Bíblico y Panorama Lingüístico de la Biblia Hebrea en el Instituto Israelí de Estudios Bíblicos, avalado por la Universidad Hebrea de Jerusalén.',
      'Ha participado en las cuatro conferencias "The Dead Sea Scrolls in Recent Scholarship: A Public Conference", patrocinadas por la New York University y el Department of Hebrew and Judaic Studies, Friends of the Israel Antiquities Authority.',
      'Se desempeña como Profesor titular del área de Divinidad en la Escuela de Alexandría y como docente invitado en el Instituto Criteria.'
    ]
  },
  {
    id: 'lucas-pelaez',
    name: 'Lucas Peláez Rivera',
    title: 'Profesor de Cristianismo Primitivo y Crítica Textual del Nuevo Testamento',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000162-ace35ace37/Lucas%202021.jpg?ph=23a7ea3ebd',
    bio: [
      'Colombiano y cristiano, residente en Japón, donde cursa actualmente Japonés, Inglés y Cristianismo en la Hirosaki Gakuin Daigaku. Es Historiador egresado de la Universidad de Antioquia y Diseñador Gráfico por el Instituto de Bellas Artes de Medellín.',
      'Ha realizado estudios en traducción de la Biblia, crítica textual y Hebreo Bíblico en la Fundación Universitaria Seminario Bíblico de Colombia.',
      'Miembro de las Asambleas de Dios, donde ha servido como profesor, ministro de alabanza y líder asociado de jóvenes. Asimismo, ha desempeñado funciones en diversas instituciones cristianas, entre ellas la Sociedad Bíblica Iberoamericana, en la cual fue representante para Colombia y conferencista en las áreas de Panorama histórico de la Iglesia y Crítica Textual Bíblica.',
      'Sus principales líneas de investigación abarcan la Historia de la Iglesia Primitiva y la Historia de la transmisión del Texto Bíblico. Actualmente es Profesor titular del área de Cristianismo Primitivo y Crítica Textual del Nuevo Testamento en la Escuela de Alexandría.'
    ]
  },
  {
    id: 'anderson-munoz',
    name: 'Anderson David Muñoz',
    title: 'Profesor de Judaísmo del Segundo Templo',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000350-0d3020d304/IMG_3438%20%282%29.jpeg?ph=23a7ea3ebd',
    bio: [
      'Venezolano y cristiano, actualmente radicado en Medellín, Colombia. Egresado en Hebreo Bíblico, Arqueología Bíblica, Literatura del Segundo Templo, Cristianismo Primitivo y Literatura Apócrifa por el Instituto de Estudios Bíblicos Moriah International Center. Cursa actualmente la Licenciatura en Estudios Pastorales en el Instituto de Formación Nueva Generación.',
      'Su dedicación al estudio de las Escrituras lo ha llevado a realizar diversos programas de Teología y Hebreo Bíblico en instituciones especializadas.',
      'Sus principales áreas de interés e investigación abarcan el Período Intertestamentario, la Historia de la Iglesia Primitiva, la Teología Bíblica, el Judaísmo, la Escatología y la Crítica Textual.',
      'Además, es Ingeniero en Computación egresado de la Universidad Privada Rafael Belloso Chacín (Venezuela). Actualmente se desempeña como Profesor titular del área de Judaísmo del Segundo Templo en la Escuela de Alexandría.'
    ]
  },
  {
    id: 'fernando-arce',
    name: 'Fernando Raúl Arce',
    title: 'Profesor de Hebreo Bíblico y Estudios Lingüísticos de la Biblia Hebrea',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000354-299ed299ee/RARCE3.jpeg?ph=23a7ea3ebd',
    bio: [
      'Salvadoreño y cristiano, residente en San Salvador. Fotógrafo y fotoperiodista, con formación en Cultura, Historia y Lengua Hebrea en Israel auspiciada por el Ministerio de Turismo, además de estudios de campo en Egipto y Jordania, respaldados por el Ministerio de Relaciones Exteriores de El Salvador.',
      'Fue Misionero Paulino del Centro Internacional de Teoterapia Integral (2003–2012), donde sirvió como profesor del Curso de Formación Bíblica, Director de Ministerio de Alabanza, responsable de Células Matrimoniales, labor Pastoral y Director de Distrito.',
      'Ha realizado estudios en Escatología Bíblica, Eclesiología, Crítica Textual, Libros Apócrifos y Pseudoepígrafos, y actualmente se dedica a la reconstrucción del Alefato Hebreo Arcaico (Proto-Sinaítico) como herramienta de Crítica Textual aplicada a la Biblia Hebrea.',
      'Sus temas de interés incluyen la Arqueología Alternativa y los Orígenes del Hombre. Actualmente es Profesor titular del área de Hebreo Bíblico y Estudios Lingüísticos de la Biblia Hebrea en la Escuela de Alexandría, además de docente invitado en el Instituto Criteria.'
    ]
  },
  {
    id: 'angel-sanchez',
    name: 'Ángel Oswaldo Sánchez',
    title: 'Gestor Técnico y Multimedia',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000358-731f3731f5/IMG_20231216_153336600.jpeg?ph=23a7ea3ebd',
    bio: [
      'Colombiano y cristiano. Técnico en Sistemas con más de veintidós años de experiencia en áreas como asesoría contable, administrativa y laboral, así como en tutorías de tesis de grado y proyectos de emprendimiento. Posee además formación empírica en Sistemas y Diseño Gráfico.',
      'Egresado con estudios profesionales en Administración de Empresas por la Universidad Nacional Abierta y a Distancia (UNAD), donde también obtuvo titulaciones como Tecnólogo en Comercio Internacional, Tecnólogo en Gestión Comercial y de Negocios, y Técnico en Creación de Empresas. Asimismo, es Tecnólogo en Contabilidad por el Instituto Centro de Investigación Profesional y Sistemas (CIPS).',
      'Es fundador y director de las organizaciones Fundación Génesis Colombia y Fundación Oveo\'s. Actualmente se desempeña como Gestor Técnico y Multimedia del canal oficial de la Escuela de Alexandría y de sus redes sociales.'
    ]
  },
  {
    id: 'william-marquez',
    name: 'William Daniel Marquez',
    title: 'Profesor de Griego Bíblico',
    image: 'https://23a7ea3ebd.cbaul-cdnwnd.com/2607e31ac19c95e85e6bf0b791c0de3a/200000360-a8401a8403/William%20Marquez.png?ph=23a7ea3ebd',
    bio: [
      'Venezolano y cristiano, actualmente residente en Ciudad de Panamá, Panamá. Se desempeña como Gerente General de Panamerican Pumps, empresa dedicada al sector del agua.',
      'Estudió Informática en el Instituto Tecnológico Antonio José de Sucre y obtuvo una especialización en Administración y Mercadeo en la Universidad Nacional Experimental Simón Rodríguez (Venezuela). Cursó Estudios Teológicos en el Instituto Bíblico Kaleo, adscrito a las Asambleas de Dios.',
      'Egresado en Griego Bíblico (básico, avanzado y especializado) por el Instituto Dominicano de Ciencias Bíblicas (IDCB). Ha realizado además estudios en Crítica Textual, Historia del Cristianismo y Hebreo Bíblico, con especial interés en la Escatología Bíblica.',
      'Actualmente es Profesor titular del área de Griego Bíblico en la Escuela de Alexandría y docente invitado en el Instituto Criteria.'
    ]
  }
];

export const TeachersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-ink-soft py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Cuerpo Docente</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-2 mb-6">
            Nuestros Profesores & Tutores
          </h1>
          <p className="text-ink-soft font-light text-base leading-relaxed">
            Un equipo multidisciplinario dedicado al análisis riguroso de las fuentes lingüísticas, arqueológicas e históricas que configuran los manuscritos bíblicos.
          </p>
        </div>

        {/* Lista de Profesores */}
        <div className="space-y-16">
          {teachersData.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`p-8 sm:p-10 rounded-2xl bg-surface border border-line shadow-xl flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Foto del Profesor */}
              <div className="w-48 sm:w-60 flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/40 to-line/60 rounded-xl blur-sm" />
                  <div className="relative rounded-xl overflow-hidden border border-gold/30 bg-surface">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-72 sm:h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Información y Biografía */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    {teacher.name}
                  </h2>
                  <p className="text-sm font-semibold text-accent mt-1 flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-gold" />
                    <span>{teacher.title}</span>
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-ink-soft font-light leading-relaxed border-t border-line pt-4">
                  {teacher.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
