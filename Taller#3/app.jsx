import { useState } from 'react';
import Navbar from './src/components/Navbar.jsx';

function App() {
  const [students, setStudents] = useState(0);

  return (
    <>
      <Navbar />
      <main id="inicio" className="home-page">
        <section className="hero" aria-labelledby="home-title">
          <p className="hero__eyebrow">ReactAcademy</p>
          <h1 id="home-title">Aprende <em>React</em> desde cero</h1>
          <p className="hero__description">
            Domina la librería más popular del frontend con proyectos
            <br className="hero__break" /> prácticos y reales.
          </p>
          <a className="button" href="#cursos">
            Ver Cursos <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section id="cursos" className="courses" aria-labelledby="courses-title">
          <div className="section-heading">
            <h2 id="courses-title">Nuestros Cursos</h2>
            <p>Elige el camino que mejor se adapte a ti</p>
          </div>
          <div className="courses__grid">
            <article className="course-card course-card--purple">
              <span className="course-card__icon" aria-hidden="true">⚛</span>
              <h3>React Básico</h3>
              <p>Componentes, props, estado y eventos. Todo lo que necesitas para empezar.</p>
              <span className="course-card__level">Principiante</span>
            </article>
            <article className="course-card course-card--blue">
              <span className="course-card__icon" aria-hidden="true">↔</span>
              <h3>React Hooks</h3>
              <p>Profundiza en useState, useEffect y crea tus propios custom hooks.</p>
              <span className="course-card__level">Intermedio</span>
            </article>
            <article className="course-card course-card--yellow">
              <span className="course-card__icon" aria-hidden="true">📁</span>
              <h3>Estado Global</h3>
              <p>Gestiona el estado con Context API y aprende cuándo usarlo.</p>
              <span className="course-card__level">Intermedio</span>
            </article>
            <article className="course-card course-card--pink">
              <span className="course-card__icon" aria-hidden="true">🚀</span>
              <h3>React Avanzado</h3>
              <p>Rendimiento, patrones avanzados y arquitectura para proyectos grandes.</p>
              <span className="course-card__level">Avanzado</span>
            </article>
          </div>
        </section>

        <section className="enrollment" aria-labelledby="enrollment-title">
          <h2 id="enrollment-title">¿Cuántos estudiantes van a inscribirse?</h2>
          <p>Usa los botones para ajustar el número</p>
          <div className="stepper" aria-label="Estudiantes inscritos">
            <button type="button" aria-label="Disminuir estudiantes" onClick={() => setStudents(Math.max(0, students - 1))}>−</button>
            <strong>{students}</strong>
            <button type="button" aria-label="Aumentar estudiantes" onClick={() => setStudents(students + 1)}>+</button>
          </div>
          <small>estudiantes inscritos</small>
        </section>
      </main>
      <footer className="footer">
        <small>
          © 2026 <span>ReactAcademy.</span> Taller 03 — React Fundamentos.
        </small>
      </footer>
    </>
  );
}

export default App;
