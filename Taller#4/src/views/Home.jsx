import { useState } from 'react';
import Hero from '../components/Hero.jsx';
import Enrollment from '../components/Enrollment.jsx';

function Home() {
  const [students, setStudents] = useState(0);

  return (
    <main className="page">
      <Hero
        before="Aprende"
        highlight="React"
        after="desde cero"
        description="Domina la librería más popular del frontend con proyectos prácticos y reales."
        ctaLabel="Ver Cursos"
        ctaTo="/cursos"
      />
      <Enrollment
        students={students}
        onIncrease={() => setStudents(students + 1)}
        onDecrease={() => setStudents(Math.max(0, students - 1))}
      />
    </main>
  );
}

export default Home;
