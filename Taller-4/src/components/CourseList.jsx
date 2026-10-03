import CourseCard from './CourseCard.jsx';

function CourseList({ courses }) {
  return (
    <div className="courses__grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          icon={course.icon}
          title={course.title}
          description={course.description}
          level={course.level}
          color={course.color}
        />
      ))}
    </div>
  );
}

export default CourseList;
