import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TeachersPage } from './pages/TeachersPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { CommunityPage } from './pages/CommunityPage';

// Pantallas dedicadas de la sección EDUCACIÓN
import { SeminariosPage } from './pages/education/SeminariosPage';
import { CatedraExclusivaPage } from './pages/education/CatedraExclusivaPage';
import { CronicasPage } from './pages/education/CronicasPage';
import { PanoramaBiblicoPage } from './pages/education/PanoramaBiblicoPage';
import { CanonesBiblicosPage } from './pages/education/CanonesBiblicosPage';
import { SalaDeProfesoresPage } from './pages/education/SalaDeProfesoresPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-page text-ink-soft font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Páginas principales del Blog */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profesores" element={<TeachersPage />} />

            {/* Sección EDUCACIÓN Completa */}
            <Route path="/seminarios" element={<SeminariosPage />} />
            <Route path="/educacion" element={<SeminariosPage />} />
            <Route path="/catedra-exclusiva" element={<CatedraExclusivaPage />} />
            <Route path="/cronicas" element={<CronicasPage />} />
            <Route path="/panorama-biblico" element={<PanoramaBiblicoPage />} />
            <Route path="/canones-biblicos" element={<CanonesBiblicosPage />} />
            <Route path="/sala-de-profesores" element={<SalaDeProfesoresPage />} />
            <Route path="/educacion/sala-de-profesores" element={<Navigate to="/sala-de-profesores" replace />} />

            {/* Archivo de Cursos y Clases */}
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/cursos/:slug" element={<CourseDetailPage />} />

            {/* Comunidad y Redes */}
            <Route path="/comunidad" element={<CommunityPage />} />

            {/* Redirecciones de compatibilidad */}
            <Route path="/sobre-nosotros" element={<Navigate to="/profesores" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
