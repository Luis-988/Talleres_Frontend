import SectionHeading from '../components/SectionHeading.jsx';
import StatCard from '../components/StatCard.jsx';
import LinkButton from '../components/LinkButton.jsx';
import { stats } from '../data/stats.js';

function Nosotros() {
  return (
    <main className="page">
      <section className="about" aria-labelledby="about-title">
        <SectionHeading
          id="about-title"
          title="Sobre ReactAcademy"
          subtitle="Aprender React haciendo, no solo leyendo"
        />
        <p className="about__text">
          Somos una academia enfocada en enseñar React con proyectos prácticos.
          Cada curso te lleva de la teoría a algo que puedes mostrar.
        </p>
        <div className="about__stats">
          {stats.map((stat) => (
            <StatCard key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
        <LinkButton to="/cursos" icon="→">
          Explorar cursos
        </LinkButton>
      </section>
    </main>
  );
}

export default Nosotros;
