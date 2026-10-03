import { useState } from 'react';
import Enrollment from '../components/Enrollment.jsx';

function Nosotros() {
  const [students, setStudents] = useState(0);

  return (
    <main className="page">
      <Enrollment
        students={students}
        onIncrease={() => setStudents(students + 1)}
        onDecrease={() => setStudents(Math.max(0, students - 1))}
      />
    </main>
  );
}

export default Nosotros;