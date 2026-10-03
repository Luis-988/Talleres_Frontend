import Hero from '../components/Hero.jsx';

function Home() {
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
    </main>
  );
}

export default Home;