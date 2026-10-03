import SectionHeading from '../components/SectionHeading.jsx';
import CourseList from '../components/CourseList.jsx';
import { courses } from '../data/courses.js';

function Cursos() {
  return (
    <main className="page">
      <section className="courses" aria-labelledby="courses-title">
        <SectionHeading
          id="courses-title"
          title="Nuestros Cursos"
          subtitle="Elige el camino que mejor se adapte a ti"
        />
        <CourseList courses={courses} />
      </section>
    </main>
  );
}

export default Cursos;
