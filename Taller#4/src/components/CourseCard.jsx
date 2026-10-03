function CourseCard({ icon, title, description, level, color }) {
  return (
    <article className={`course-card course-card--${color}`}>
      <span className="course-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="course-card__level">{level}</span>
    </article>
  );
}

export default CourseCard;
