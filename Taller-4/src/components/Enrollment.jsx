import Stepper from './Stepper.jsx';

function Enrollment({ students, onIncrease, onDecrease }) {
  return (
    <section className="enrollment" aria-labelledby="enrollment-title">
      <h2 id="enrollment-title">¿Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número</p>
      <Stepper
        value={students}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        label="Estudiantes inscritos"
      />
      <small>estudiantes inscritos</small>
    </section>
  );
}

export default Enrollment;
